/**
 * 职测 - 职业匹配引擎
 * 根据用户的多维度输入计算与各个职业的匹配度
 */

class CareerMatcher {
  constructor(careers) {
    this.careers = careers;
  }

  /**
   * 计算用户与所有职业的匹配度
   * @param {Object} userProfile - 用户画像
   * @returns {Array} 排序后的匹配结果
   */
  match(userProfile) {
    const results = this.careers.map(career => ({
      career: career,
      score: this._calculateMatch(career, userProfile),
      details: this._getDimensionScores(career, userProfile)
    }));

    results.sort((a, b) => b.score - a.score);
    return results;
  }

  /**
   * 计算单个人职匹配度（加权综合）
   */
  _calculateMatch(career, user) {
    const dims = this._getDimensionScores(career, user);
    
    // 各维度权重
    const weights = {
      personality: 0.25,
      interests: 0.20,
      skills: 0.20,
      workstyle: 0.15,
      lifestyle: 0.10,
      values: 0.10
    };

    let total = 0;
    let weightSum = 0;
    for (const [dim, weight] of Object.entries(weights)) {
      if (dims[dim] !== null && dims[dim] !== undefined) {
        total += dims[dim] * weight;
        weightSum += weight;
      }
    }

    return weightSum > 0 ? Math.round((total / weightSum) * 100) : 0;
  }

  /**
   * 计算各维度得分
   */
  _getDimensionScores(career, user) {
    return {
      personality: this._matchPersonality(career, user),
      interests: this._matchInterests(career, user),
      skills: this._matchSkills(career, user),
      workstyle: this._matchWorkstyle(career, user),
      lifestyle: this._matchLifestyle(career, user),
      values: this._matchValues(career, user)
    };
  }

  /**
   * 霍兰德六型人格匹配
   * R-现实型 I-研究型 A-艺术型 S-社会型 E-企业型 C-常规型
   */
  _matchPersonality(career, user) {
    if (!user.personality || !career.traits.personality) return null;
    
    let totalDiff = 0;
    let count = 0;
    for (const [type, userVal] of Object.entries(user.personality)) {
      const careerVal = career.traits.personality[type];
      if (careerVal !== undefined) {
        totalDiff += Math.abs(userVal - careerVal);
        count++;
      }
    }
    
    // 最大可能差异: 4 * count (1-5 scale)
    const maxDiff = 4 * count;
    return count > 0 ? Math.round((1 - totalDiff / maxDiff) * 100) : null;
  }

  /**
   * 兴趣匹配（基于关键词重叠）
   */
  _matchInterests(career, user) {
    if (!user.interests || !career.traits.interests) return null;
    
    const userSet = new Set(user.interests.map(s => s.toLowerCase()));
    const careerSet = new Set(career.traits.interests.map(s => s.toLowerCase()));
    
    const intersection = new Set([...userSet].filter(x => careerSet.has(x)));
    
    if (careerSet.size === 0) return null;
    // 召回率 + 精确率的调和
    const recall = userSet.size > 0 ? intersection.size / Math.min(userSet.size, careerSet.size) : 0;
    
    return Math.round(Math.min(recall, 1) * 100);
  }

  /**
   * 技能匹配
   */
  _matchSkills(career, user) {
    if (!user.skills || !career.traits.skills) return null;
    
    const userSet = new Set(user.skills.map(s => s.toLowerCase()));
    const careerSet = new Set(career.traits.skills.map(s => s.toLowerCase()));
    
    const intersection = [...userSet].filter(s => 
      [...careerSet].some(cs => s.includes(cs) || cs.includes(s))
    );
    
    if (careerSet.size === 0) return 0;
    const score = intersection.length / careerSet.length;
    return Math.round(Math.min(score, 1) * 100);
  }

  /**
   * 工作方式匹配
   */
  _matchWorkstyle(career, user) {
    if (!user.workstyle || !career.traits.workstyle) return null;
    
    const userSet = new Set(user.workstyle.map(s => s.toLowerCase()));
    const careerSet = new Set(career.traits.workstyle.map(s => s.toLowerCase()));
    
    const intersection = new Set([...userSet].filter(x => careerSet.has(x)));
    
    if (careerSet.size === 0) return null;
    return Math.round((intersection.size / Math.max(careerSet.size, userSet.size)) * 100);
  }

  /**
   * 生活方式匹配
   */
  _matchLifestyle(career, user) {
    if (!user.lifestyle || !career.traits.lifestyle) return null;
    
    const userSet = new Set(user.lifestyle.map(s => s.toLowerCase()));
    const careerSet = new Set(career.traits.lifestyle.map(s => s.toLowerCase()));
    
    const intersection = new Set([...userSet].filter(x => careerSet.has(x)));
    
    if (careerSet.size === 0) return null;
    return Math.round((intersection.size / Math.max(careerSet.size, userSet.size)) * 100);
  }

  /**
   * 价值观匹配
   */
  _matchValues(career, user) {
    if (!user.values || !career.traits.values) return null;
    
    const userSet = new Set(user.values.map(s => s.toLowerCase()));
    const careerSet = new Set(career.traits.values.map(s => s.toLowerCase()));
    
    const intersection = new Set([...userSet].filter(x => careerSet.has(x)));
    
    if (careerSet.size === 0) return null;
    return Math.round((intersection.size / Math.max(careerSet.size, userSet.size)) * 100);
  }
}

// 导出
if (typeof module !== 'undefined') module.exports = CareerMatcher;
