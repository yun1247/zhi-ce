/**
 * 职测 - 主应用逻辑
 */

let careerData = null;
let matcher = null;

// 初始化：加载职业数据
fetch("data/careers.json")
  .then(r => r.json())
  .then(data => {
    careerData = data.careers;
    matcher = new CareerMatcher(careerData);
  })
  .catch(err => {
    // Fallback: 如果 fetch 失败（file://协议），用内嵌数据
    console.warn("Fetch failed, using embedded data", err);
  });

// 滑块实时显示值
document.querySelectorAll(".slider").forEach(slider => {
  slider.addEventListener("input", function() {
    document.getElementById(this.id + "-val").textContent = this.value;
  });
});

// 步骤切换
function nextStep(step) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("step" + step).classList.add("active");
  
  document.querySelectorAll(".step").forEach(s => {
    s.classList.toggle("active", parseInt(s.dataset.step) <= step);
  });
}

function prevStep(step) {
  nextStep(step);
}

// 收集表单数据
function collectUserProfile() {
  const getCheckboxValues = (id) => {
    return [...document.querySelectorAll("#" + id + " input:checked")].map(c => c.value);
  };

  return {
    personality: {
      A: parseInt(document.getElementById("traitA").value),
      I: parseInt(document.getElementById("traitI").value),
      R: parseInt(document.getElementById("traitR").value),
      S: parseInt(document.getElementById("traitS").value),
      E: parseInt(document.getElementById("traitE").value),
      C: parseInt(document.getElementById("traitC").value)
    },
    interests: getCheckboxValues("interests"),
    skills: getCheckboxValues("skills"),
    workstyle: getCheckboxValues("workstyle"),
    lifestyle: getCheckboxValues("lifestyle"),
    values: getCheckboxValues("values"),
    education: document.getElementById("education").value
  };
}

// 执行匹配
function doMatch() {
  const profile = collectUserProfile();
  
  // 如果没有通过 fetch 加载数据，尝试 fallback
  if (!careerData) {
    // 直接读取内嵌 JSON
    const script = document.querySelector("script[src='data/careers.json']");
    // 重新 fetch
    fetch("data/careers.json")
      .then(r => r.json())
      .then(data => {
        careerData = data.careers;
        matcher = new CareerMatcher(careerData);
        showResults(profile);
      });
    return;
  }
  
  showResults(profile);
}

function showResults(profile) {
  const results = matcher.match(profile);
  
  // 过滤学历
  const eduOrder = { "不限": 0, "大专": 1, "本科": 2, "硕士": 3, "博士": 4 };
  const userEdu = eduOrder[profile.education] || 2;
  
  const filtered = results.filter(r => {
    const careerEdu = eduOrder[r.career.min_education] || 0;
    return careerEdu <= userEdu;
  });

  nextStep(4);
  
  const container = document.getElementById("results-container");
  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = "<p class='empty'>没有找到匹配的职业，试试调整选项重新测评</p>";
    return;
  }

  // 显示前 10 个
  const topN = filtered.slice(0, 10);
  
  const scoreColors = {
    high: "#22c55e",
    mid: "#eab308",
    low: "#94a3b8"
  };

  topN.forEach((result, index) => {
    const c = result.career;
    const score = result.score;
    const color = score >= 70 ? scoreColors.high : score >= 45 ? scoreColors.mid : scoreColors.low;
    const tier = score >= 70 ? "🔥 高度匹配" : score >= 45 ? "💡 值得考虑" : "👀 了解一下";

    const dims = result.details;
    const dimBars = [
      { label: "性格", val: dims.personality },
      { label: "兴趣", val: dims.interests },
      { label: "技能", val: dims.skills },
      { label: "工作方式", val: dims.workstyle },
      { label: "生活方式", val: dims.lifestyle },
      { label: "价值观", val: dims.values }
    ].filter(d => d.val !== null);

    container.innerHTML += `
      <div class="result-card" style="animation-delay: ${index * 0.05}s">
        <div class="result-header">
          <div class="result-rank">#${index + 1}</div>
          <div class="result-info">
            <h3>${c.name}</h3>
            <span class="result-category">${c.category}</span>
            <span class="result-tier">${tier}</span>
          </div>
          <div class="result-score" style="color: ${color}">
            <div class="score-ring">
              <svg width="80" height="80">
                <circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" stroke-width="6"/>
                <circle cx="40" cy="40" r="34" fill="none" stroke="${color}" stroke-width="6"
                  stroke-dasharray="${2 * Math.PI * 34}"
                  stroke-dashoffset="${2 * Math.PI * 34 * (1 - score / 100)}"
                  transform="rotate(-90 40 40)"/>
              </svg>
              <span class="score-text">${score}%</span>
            </div>
          </div>
        </div>
        <div class="result-body">
          <div class="dim-bars">
            ${dimBars.map(d => `
              <div class="dim-bar-row">
                <span class="dim-label">${d.label}</span>
                <div class="dim-bar-track">
                  <div class="dim-bar-fill" style="width: ${d.val}%"></div>
                </div>
                <span class="dim-val">${d.val}%</span>
              </div>
            `).join("")}
          </div>
          <div class="result-details">
            <p><strong>💰 薪资范围：</strong>${c.salary_range}</p>
            <p><strong>📚 学历要求：</strong>${c.min_education}</p>
            <p><strong>🏷️ 标签：</strong>${c.tags.map(t => `<span class="tag">${t}</span>`).join("")}</p>
            <p><strong>📋 日常工作：</strong>${c.daily_activities.join(" · ")}</p>
          </div>
        </div>
      </div>
    `;
  });

  // 滚动到结果区域
  container.scrollIntoView({ behavior: "smooth", block: "start" });
}

function restart() {
  // 重置所有滑块
  document.querySelectorAll(".slider").forEach(s => {
    s.value = 3;
    document.getElementById(s.id + "-val").textContent = "3";
  });
  // 重置所有checkbox
  document.querySelectorAll("input[type=checkbox]").forEach(c => c.checked = false);
  // 回到第一步
  document.querySelectorAll(".step").forEach((s, i) => s.classList.toggle("active", i === 0));
  nextStep(1);
}
