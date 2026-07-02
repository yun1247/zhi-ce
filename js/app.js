/**
 * 职测 - 主应用逻辑
 */

let careerData = null;
let matcher = null;

// 内嵌职业数据（支持 file:// 本地打开）
const CAREERS_DATA = ﻿{
  "version": "1.0",
  "description": "职业数据库 - 基于O*NET分类体系",
  "careers": [
    {
      "id": "fe-dev",
      "name": "前端开发工程师",
      "category": "技术/互联网",
      "min_education": "大专",
      "salary_range": "8K-35K",
      "traits": {
        "personality": { "I": 4, "R": 2, "A": 4, "S": 2, "E": 2, "C": 3 },
        "interests": ["编程", "设计", "创造"],
        "skills": ["JavaScript", "HTML/CSS", "React/Vue", "UI/UX"],
        "workstyle": ["独立工作", "远程办公", "结果导向"],
        "lifestyle": ["较少加班", "灵活时间"],
        "values": ["创造力", "持续学习", "技术深度"]
      },
      "daily_activities": ["写代码实现界面", "调试bug", "代码评审", "与产品讨论需求"],
      "tags": ["技术岗", "入门友好", "远程友好", "创造力"]
    },
    {
      "id": "backend-dev",
      "name": "后端开发工程师",
      "category": "技术/互联网",
      "min_education": "大专",
      "salary_range": "10K-45K",
      "traits": {
        "personality": { "I": 4, "R": 3, "A": 2, "S": 2, "E": 2, "C": 4 },
        "interests": ["编程", "系统设计", "算法"],
        "skills": ["Java/Python/Go", "数据库", "微服务", "Linux"],
        "workstyle": ["独立工作", "专注深度", "逻辑驱动"],
        "lifestyle": ["可能有加班", "核心业务期忙"],
        "values": ["技术深度", "稳定性", "架构思维"]
      },
      "daily_activities": ["设计API接口", "写业务逻辑", "优化数据库查询", "排查线上问题"],
      "tags": ["技术岗", "高薪", "逻辑型"]
    },
    {
      "id": "fullstack-dev",
      "name": "全栈开发工程师",
      "category": "技术/互联网",
      "min_education": "大专",
      "salary_range": "12K-50K",
      "traits": {
        "personality": { "I": 3, "R": 2, "A": 4, "S": 3, "E": 2, "C": 3 },
        "interests": ["编程", "产品设计", "解决问题"],
        "skills": ["前后端技术", "数据库", "部署运维", "产品思维"],
        "workstyle": ["独立负责", "快速迭代", "多点触达"],
        "lifestyle": ["灵活", "创业公司节奏"],
        "values": ["全面能力", "产品感", "ownership"]
      },
      "daily_activities": ["前端写页面", "后端写接口", "部署上线", "技术方案设计"],
      "tags": ["技术岗", "创业友好", "全面型"]
    },
    {
      "id": "algorithm-engineer",
      "name": "算法工程师",
      "category": "技术/互联网",
      "min_education": "硕士",
      "salary_range": "20K-80K",
      "traits": {
        "personality": { "I": 5, "R": 3, "A": 2, "S": 1, "E": 1, "C": 3 },
        "interests": ["数学", "研究", "优化"],
        "skills": ["机器学习", "深度学习", "Python", "数学统计"],
        "workstyle": ["深度研究", "实验驱动", "长周期"],
        "lifestyle": ["较自由", "学术氛围"],
        "values": ["技术前沿", "学术成就", "创新"]
      },
      "daily_activities": ["读论文", "跑实验", "调参", "分析数据"],
      "tags": ["技术岗", "高学历", "高薪", "研究型"]
    },
    {
      "id": "devops-engineer",
      "name": "运维/DevOps工程师",
      "category": "技术/互联网",
      "min_education": "大专",
      "salary_range": "10K-40K",
      "traits": {
        "personality": { "I": 3, "R": 4, "A": 1, "S": 2, "E": 2, "C": 5 },
        "interests": ["系统架构", "自动化", "稳定性"],
        "skills": ["Linux", "Docker/K8s", "CI/CD", "监控体系"],
        "workstyle": ["严谨细致", "应急响应", "流程优化"],
        "lifestyle": ["可能需要值班", "高压力"],
        "values": ["稳定性", "自动化", "可靠性"]
      },
      "daily_activities": ["维护服务器", "搭建CI/CD", "处理告警", "容器编排"],
      "tags": ["技术岗", "系统型", "高压"]
    },
    {
      "id": "data-scientist",
      "name": "数据分析师",
      "category": "技术/互联网",
      "min_education": "本科",
      "salary_range": "8K-30K",
      "traits": {
        "personality": { "I": 3, "R": 3, "A": 3, "S": 3, "E": 2, "C": 4 },
        "interests": ["数据", "商业分析", "可视化"],
        "skills": ["SQL", "Python", "数据分析工具", "统计学"],
        "workstyle": ["沟通协作", "数据驱动", "报告输出"],
        "lifestyle": ["正常作息", "项目制"],
        "values": ["洞察力", "商业理解", "数据叙事"]
      },
      "daily_activities": ["取数分析", "做报表", "业务沟通", "数据清洗"],
      "tags": ["技术岗", "入门友好", "沟通型"]
    },
    {
      "id": "product-manager",
      "name": "产品经理",
      "category": "互联网/产品",
      "min_education": "本科",
      "salary_range": "10K-40K",
      "traits": {
        "personality": { "I": 1, "R": 1, "A": 5, "S": 4, "E": 4, "C": 3 },
        "interests": ["产品设计", "用户研究", "商业策略"],
        "skills": ["需求分析", "原型设计", "数据分析", "项目管理"],
        "workstyle": ["跨部门沟通", "用户导向", "快速决策"],
        "lifestyle": ["加班较多", "会议多"],
        "values": ["用户价值", "商业成功", "影响力"]
      },
      "daily_activities": ["写PRD", "和开发沟通需求", "数据分析", "竞品调研"],
      "tags": ["非技术岗", "沟通型", "创意型"]
    },
    {
      "id": "ui-designer",
      "name": "UI/UX设计师",
      "category": "设计/创意",
      "min_education": "大专",
      "salary_range": "8K-30K",
      "traits": {
        "personality": { "I": 2, "R": 1, "A": 5, "S": 3, "E": 3, "C": 2 },
        "interests": ["设计", "艺术", "用户研究"],
        "skills": ["Figma/Sketch", "设计系统", "用户研究", "交互设计"],
        "workstyle": ["创意导向", "迭代优化", "用户共情"],
        "lifestyle": ["灵活", "项目制"],
        "values": ["美学", "用户体验", "创造力"]
      },
      "daily_activities": ["画界面", "做交互原型", "用户测试", "和产品讨论设计"],
      "tags": ["设计岗", "创意型", "入门友好"]
    },
    {
      "id": "game-dev",
      "name": "游戏开发工程师",
      "category": "技术/游戏",
      "min_education": "本科",
      "salary_range": "10K-40K",
      "traits": {
        "personality": { "I": 3, "R": 2, "A": 5, "S": 2, "E": 2, "C": 2 },
        "interests": ["游戏", "图形学", "创意编程"],
        "skills": ["Unity/Unreal", "C++/C#", "图形学", "物理引擎"],
        "workstyle": ["项目制", "创意与技术结合", "团队协作"],
        "lifestyle": ["项目冲刺期加班", "创意氛围"],
        "values": ["创造力", "技术实现", "玩家体验"]
      },
      "daily_activities": ["写游戏逻辑", "调渲染效果", "优化性能", "和美术沟通"],
      "tags": ["技术岗", "创意型", "热爱游戏"]
    },
    {
      "id": "security-engineer",
      "name": "安全工程师",
      "category": "技术/安全",
      "min_education": "本科",
      "salary_range": "15K-50K",
      "traits": {
        "personality": { "I": 4, "R": 4, "A": 1, "S": 1, "E": 1, "C": 5 },
        "interests": ["安全", "逆向", "漏洞挖掘"],
        "skills": ["网络安全", "渗透测试", "逆向工程", "密码学"],
        "workstyle": ["深度专注", "攻防思维", "持续学习"],
        "lifestyle": ["应急响应", "24/7意识"],
        "values": ["安全信念", "技术深度", "守护者心态"]
      },
      "daily_activities": ["漏洞扫描", "渗透测试", "安全审计", "应急响应"],
      "tags": ["技术岗", "高薪", "专业型"]
    },
    {
      "id": "teacher",
      "name": "教师/教育工作者",
      "category": "教育",
      "min_education": "本科",
      "salary_range": "5K-20K",
      "traits": {
        "personality": { "I": 1, "R": 2, "A": 3, "S": 5, "E": 4, "C": 3 },
        "interests": ["教育", "沟通", "分享知识"],
        "skills": ["表达能力", "耐心", "专业知识", "组织能力"],
        "workstyle": ["规律作息", "与学生互动", "课程设计"],
        "lifestyle": ["有寒暑假", "稳定"],
        "values": ["育人", "社会贡献", "稳定"]
      },
      "daily_activities": ["备课", "上课", "批改作业", "和学生交流"],
      "tags": ["稳定", "寒暑假", "社会贡献"]
    },
    {
      "id": "doctor",
      "name": "医生",
      "category": "医疗健康",
      "min_education": "硕士",
      "salary_range": "10K-50K",
      "traits": {
        "personality": { "I": 3, "R": 4, "A": 1, "S": 5, "E": 2, "C": 5 },
        "interests": ["医学", "帮助他人", "生命科学"],
        "skills": ["临床技能", "诊断能力", "沟通能力", "抗压能力"],
        "workstyle": ["严谨细致", "高责任心", "团队协作"],
        "lifestyle": ["值班制", "高压力", "社会尊重"],
        "values": ["救死扶伤", "责任心", "终身学习"]
      },
      "daily_activities": ["查房", "门诊", "写病历", "手术"],
      "tags": ["高学历", "高压", "受人尊敬", "稳定"]
    },
    {
      "id": "freelance-writer",
      "name": "自由撰稿人/内容创作者",
      "category": "内容/媒体",
      "min_education": "不限",
      "salary_range": "3K-30K",
      "traits": {
        "personality": { "I": 3, "R": 1, "A": 5, "S": 2, "E": 2, "C": 1 },
        "interests": ["写作", "阅读", "表达"],
        "skills": ["写作能力", "信息搜集", "选题策划", "新媒体运营"],
        "workstyle": ["自由安排", "自我驱动", "创作导向"],
        "lifestyle": ["时间自由", "收入不稳定", "可居家"],
        "values": ["创作自由", "表达", "生活方式"]
      },
      "daily_activities": ["找选题", "写作", "编辑修改", "和编辑沟通"],
      "tags": ["自由职业", "创作型", "时间自由"]
    },
    {
      "id": "accountant",
      "name": "会计师/财务",
      "category": "金融/财务",
      "min_education": "本科",
      "salary_range": "6K-25K",
      "traits": {
        "personality": { "I": 2, "R": 4, "A": 1, "S": 2, "E": 2, "C": 5 },
        "interests": ["数字", "规则", "精确"],
        "skills": ["会计准则", "财务软件", "Excel", "税务知识"],
        "workstyle": ["严谨规范", "按部就班", "细致"],
        "lifestyle": ["月末季末忙", "稳定"],
        "values": ["精确", "合规", "稳定"]
      },
      "daily_activities": ["做账", "报税", "出报表", "财务分析"],
      "tags": ["稳定", "严谨型", "越老越值钱"]
    },
    {
      "id": "sales",
      "name": "销售/商务",
      "category": "商务/市场",
      "min_education": "大专",
      "salary_range": "5K-100K+",
      "traits": {
        "personality": { "I": 1, "R": 1, "A": 3, "S": 4, "E": 5, "C": 2 },
        "interests": ["人际交往", "谈判", "挑战"],
        "skills": ["沟通能力", "谈判技巧", "抗压能力", "社交能力"],
        "workstyle": ["结果导向", "高社交", "出差多"],
        "lifestyle": ["收入波动大", "应酬多", "时间灵活"],
        "values": ["成就", "收入高", "自由"]
      },
      "daily_activities": ["拜访客户", "电话销售", "谈判签约", "维护关系"],
      "tags": ["高收入", "压力大", "社交型"]
    },
    {
      "id": "hr",
      "name": "人力资源HR",
      "category": "职能/管理",
      "min_education": "本科",
      "salary_range": "6K-25K",
      "traits": {
        "personality": { "I": 1, "R": 2, "A": 2, "S": 5, "E": 4, "C": 4 },
        "interests": ["与人打交道", "组织发展", "心理学"],
        "skills": ["招聘", "员工关系", "薪酬福利", "劳动法规"],
        "workstyle": ["沟通协调", "流程化", "服务导向"],
        "lifestyle": ["正常作息", "稳定"],
        "values": ["公平", "人文关怀", "组织建设"]
      },
      "daily_activities": ["招聘面试", "员工关系处理", "绩效考核", "培训组织"],
      "tags": ["稳定", "沟通型", "入门友好"]
    },
    {
      "id": "entrepreneur",
      "name": "创业者/创始人",
      "category": "创业",
      "min_education": "不限",
      "salary_range": "0-无上限",
      "traits": {
        "personality": { "I": 2, "R": 1, "A": 5, "S": 3, "E": 5, "C": 1 },
        "interests": ["创造价值", "领导力", "解决问题"],
        "skills": ["综合能力", "领导力", "执行力", "抗挫折"],
        "workstyle": ["全盘负责", "高不确定性", "快速决策"],
        "lifestyle": ["高强度", "不规律", "高风险高回报"],
        "values": ["创造", "自由", "影响力"]
      },
      "daily_activities": ["找方向", "带团队", "谈融资", "解决各种问题"],
      "tags": ["高风险", "高回报", "自由", "领导型"]
    },
    {
      "id": "writer-tech",
      "name": "技术文档工程师",
      "category": "技术/内容",
      "min_education": "本科",
      "salary_range": "8K-25K",
      "traits": {
        "personality": { "I": 4, "R": 3, "A": 3, "S": 2, "E": 1, "C": 4 },
        "interests": ["写作", "技术", "教学"],
        "skills": ["技术理解", "写作", "信息架构", "沟通"],
        "workstyle": ["独立工作", "深度阅读", "精准表达"],
        "lifestyle": ["轻松", "弹性工作", "低压力"],
        "values": ["清晰表达", "帮助他人", "持续学习"]
      },
      "daily_activities": ["写API文档", "整理技术资料", "和工程师沟通", "维护文档站"],
      "tags": ["技术+写作", "低压力", "远程友好"]
    },
    {
      "id": "data-engineer",
      "name": "大数据工程师",
      "category": "技术/互联网",
      "min_education": "本科",
      "salary_range": "15K-50K",
      "traits": {
        "personality": { "I": 4, "R": 4, "A": 1, "S": 2, "E": 1, "C": 4 },
        "interests": ["数据", "架构", "ETL"],
        "skills": ["Spark/Flink", "Hadoop", "数据仓库", "SQL"],
        "workstyle": ["架构思维", "数据导向", "系统建设"],
        "lifestyle": ["正常", "大厂节奏"],
        "values": ["数据价值", "技术架构", "效率"]
      },
      "daily_activities": ["搭数据管道", "写ETL", "优化数仓", "数据治理"],
      "tags": ["技术岗", "高薪", "架构型"]
    },
    {
      "id": "qa-engineer",
      "name": "测试工程师",
      "category": "技术/互联网",
      "min_education": "大专",
      "salary_range": "6K-25K",
      "traits": {
        "personality": { "I": 3, "R": 4, "A": 1, "S": 2, "E": 1, "C": 5 },
        "interests": ["找bug", "质量", "自动化"],
        "skills": ["测试方法论", "自动化测试", "性能测试", "细心"],
        "workstyle": ["严谨细致", "重复性工作", "质量把关"],
        "lifestyle": ["项目上线前忙", "正常作息"],
        "values": ["质量", "用户体验", "严谨"]
      },
      "daily_activities": ["写测试用例", "执行测试", "提bug", "自动化测试开发"],
      "tags": ["技术岗", "入门友好", "严谨型"]
    },
    {
      "id": "architect",
      "name": "软件架构师",
      "category": "技术/互联网",
      "min_education": "本科",
      "salary_range": "30K-80K",
      "traits": {
        "personality": { "I": 5, "R": 4, "A": 2, "S": 2, "E": 2, "C": 4 },
        "interests": ["系统设计", "技术战略", "创新"],
        "skills": ["分布式系统", "系统设计", "技术选型", "团队指导"],
        "workstyle": ["全局思维", "决策导向", "技术领导"],
        "lifestyle": ["高责任", "资深身份"],
        "values": ["技术视野", "影响力", "长期思维"]
      },
      "daily_activities": ["设计系统架构", "技术评审", "制定规范", "指导开发团队"],
      "tags": ["资深岗", "高薪", "领导型", "经验要求高"]
    },
    {
      "id": "mobile-dev",
      "name": "移动端开发工程师",
      "category": "技术/互联网",
      "min_education": "大专",
      "salary_range": "10K-35K",
      "traits": {
        "personality": { "I": 3, "R": 2, "A": 4, "S": 2, "E": 2, "C": 3 },
        "interests": ["移动产品", "编程", "用户体验"],
        "skills": ["iOS/Android", "Flutter/RN", "移动架构", "性能优化"],
        "workstyle": ["产品导向", "迭代快", "用户敏感"],
        "lifestyle": ["正常", "大厂节奏"],
        "values": ["用户体验", "技术实现", "产品感"]
      },
      "daily_activities": ["开发App功能", "优化性能", "适配新机型", "发布上架"],
      "tags": ["技术岗", "产品型"]
    },
    {
      "id": "ai-prompt",
      "name": "AI提示词工程师/Prompt工程师",
      "category": "技术/AI",
      "min_education": "不限",
      "salary_range": "10K-50K",
      "traits": {
        "personality": { "I": 3, "R": 2, "A": 5, "S": 2, "E": 2, "C": 2 },
        "interests": ["AI", "语言", "创造"],
        "skills": ["Prompt设计", "LLM原理", "Python", "逻辑思维"],
        "workstyle": ["实验驱动", "创意型", "迭代快"],
        "lifestyle": ["灵活", "前沿领域"],
        "values": ["前沿技术", "创造力", "效率"]
      },
      "daily_activities": ["设计prompt", "测试效果", "优化输出", "搭建AI工作流"],
      "tags": ["AI", "新兴岗位", "创意型"]
    },
    {
      "id": "blockchain-dev",
      "name": "区块链开发工程师",
      "category": "技术/区块链",
      "min_education": "本科",
      "salary_range": "15K-60K",
      "traits": {
        "personality": { "I": 4, "R": 3, "A": 3, "S": 1, "E": 2, "C": 3 },
        "interests": ["去中心化", "密码学", "经济模型"],
        "skills": ["Solidity", "智能合约", "Web3", "Go/Rust"],
        "workstyle": ["前沿探索", "开源协作", "社区驱动"],
        "lifestyle": ["灵活", "国际化团队"],
        "values": ["去中心化信念", "技术创新", "开放"]
      },
      "daily_activities": ["写智能合约", "审计合约", "开发DApp", "参与社区"],
      "tags": ["技术岗", "高薪", "前沿", "国际化"]
    },
    {
      "id": "embedded-dev",
      "name": "嵌入式开发工程师",
      "category": "技术/硬件",
      "min_education": "本科",
      "salary_range": "10K-35K",
      "traits": {
        "personality": { "I": 4, "R": 5, "A": 1, "S": 1, "E": 1, "C": 4 },
        "interests": ["硬件", "底层", "系统"],
        "skills": ["C/C++", "RTOS", "单片机", "驱动开发"],
        "workstyle": ["深度专注", "调试驱动", "硬件思维"],
        "lifestyle": ["正常", "制造业园区"],
        "values": ["底层原理", "硬件结合", "匠人精神"]
      },
      "daily_activities": ["写驱动程序", "调试硬件", "电路板联调", "性能优化"],
      "tags": ["技术岗", "底层", "专注型"]
    },
    {
      "id": "project-manager",
      "name": "项目经理",
      "category": "职能/管理",
      "min_education": "本科",
      "salary_range": "10K-35K",
      "traits": {
        "personality": { "I": 1, "R": 3, "A": 2, "S": 4, "E": 4, "C": 5 },
        "interests": ["组织协调", "计划", "达成目标"],
        "skills": ["项目管理", "风险管理", "团队协调", "时间管理"],
        "workstyle": ["流程驱动", "沟通桥梁", "目标导向"],
        "lifestyle": ["压力中等", "正常作息"],
        "values": ["效率", "秩序", "成就"]
      },
      "daily_activities": ["定计划", "跟进度", "开会协调", "风险预警"],
      "tags": ["管理岗", "沟通型", "组织型"]
    },
    {
      "id": "psychologist",
      "name": "心理咨询师",
      "category": "医疗健康",
      "min_education": "硕士",
      "salary_range": "5K-30K",
      "traits": {
        "personality": { "I": 2, "R": 2, "A": 3, "S": 5, "E": 3, "C": 2 },
        "interests": ["心理学", "帮助他人", "倾听"],
        "skills": ["心理咨询技术", "共情能力", "倾听", "伦理意识"],
        "workstyle": ["一对一", "深度交流", "保密"],
        "lifestyle": ["弹性", "需要督导", "情感消耗"],
        "values": ["助人", "理解", "成长"]
      },
      "daily_activities": ["做咨询", "写案例记录", "督导学习", "自我照护"],
      "tags": ["助人型", "深度沟通", "情感消耗"]
    },
    {
      "id": "civil-servant",
      "name": "公务员/事业单位",
      "category": "政府/公共事业",
      "min_education": "本科",
      "salary_range": "4K-15K",
      "traits": {
        "personality": { "I": 2, "R": 3, "A": 1, "S": 3, "E": 2, "C": 5 },
        "interests": ["稳定", "公共服务", "规则"],
        "skills": ["公文写作", "政策理解", "组织协调", "耐心"],
        "workstyle": ["按部就班", "流程规范", "层级分明"],
        "lifestyle": ["铁饭碗", "福利好", "工作生活平衡"],
        "values": ["稳定", "社会贡献", "安全感"]
      },
      "daily_activities": ["处理文件", "开会", "接待群众", "写报告"],
      "tags": ["稳定", "铁饭碗", "入门友好"]
    },
    {
      "id": "lawyer",
      "name": "律师",
      "category": "法律",
      "min_education": "硕士",
      "salary_range": "8K-100K+",
      "traits": {
        "personality": { "I": 3, "R": 4, "A": 2, "S": 3, "E": 3, "C": 4 },
        "interests": ["法律", "辩论", "正义"],
        "skills": ["法律知识", "逻辑推理", "辩论能力", "文书写作"],
        "workstyle": ["案件驱动", "高压", "独立工作"],
        "lifestyle": ["加班多", "前期收入低", "后期高"],
        "values": ["正义", "专业", "成就"]
      },
      "daily_activities": ["查阅案卷", "写法律文书", "出庭", "客户咨询"],
      "tags": ["高门槛", "前期苦", "后期高薪"]
    },
    {
      "id": "photographer",
      "name": "摄影师/视频创作者",
      "category": "设计/创意",
      "min_education": "不限",
      "salary_range": "3K-30K",
      "traits": {
        "personality": { "I": 2, "R": 1, "A": 5, "S": 3, "E": 3, "C": 1 },
        "interests": ["摄影", "旅行", "美学"],
        "skills": ["摄影技术", "后期处理", "构图", "设备知识"],
        "workstyle": ["项目制", "创作自由", "现场工作"],
        "lifestyle": ["时间自由", "收入不稳定", "可旅行"],
        "values": ["美学", "记录", "自由"]
      },
      "daily_activities": ["拍摄", "后期修图", "接单沟通", "设备维护"],
      "tags": ["自由职业", "创作型", "时间自由"]
    },
    {
      "id": "researcher",
      "name": "科研人员/研究员",
      "category": "教育/科研",
      "min_education": "博士",
      "salary_range": "8K-30K",
      "traits": {
        "personality": { "I": 5, "R": 4, "A": 2, "S": 1, "E": 1, "C": 3 },
        "interests": ["研究", "发现", "学术"],
        "skills": ["研究方法", "论文写作", "数据分析", "文献检索"],
        "workstyle": ["深度专注", "长周期", "独立"],
        "lifestyle": ["学术自由", "申请基金压力", "稳定"],
        "values": ["真理", "学术贡献", "知识"]
      },
      "daily_activities": ["读文献", "做实验", "写论文", "参加学术会议"],
      "tags": ["高学历", "学术型", "稳定"]
    }
  ]
}
;

// 初始化
function initData() {
  try {
    careerData = CAREERS_DATA.careers;
    matcher = new CareerMatcher(careerData);
    console.log("Loaded " + careerData.length + " careers");
  } catch(e) {
    console.error("Data init failed, trying fetch...", e);
    fetch("data/careers.json")
      .then(r => r.json())
      .then(data => {
        careerData = data.careers;
        matcher = new CareerMatcher(careerData);
      })
      .catch(err => console.warn("Fetch also failed", err));
  }
}
initData();

// 滑块实时显示值
bindAutoSave();

document.addEventListener("DOMContentLoaded", function() {
  restoreFormData();
});

if (document.readyState !== 'loading') {
  restoreFormData();
}

// 步骤切换
function nextStep(step) {
  saveFormData();
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
  
  if (!careerData) {
    // 数据还没加载好，重试
    setTimeout(() => {
      if (careerData) {
        showResults(profile);
      } else {
        alert("数据加载中，请稍后再试");
      }
    }, 500);
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


// 自动保存所有表单数据到 sessionStorage
let saveTimer = null;
function showSaveHint() {
  const el = document.getElementById('save-indicator');
  if (!el) return;
  el.style.opacity = '1';
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => { el.style.opacity = '0'; }, 1500);
}
function saveFormData() {
  const data = collectUserProfile();
  sessionStorage.setItem('zhiCeProfile', JSON.stringify(data));
  
  document.querySelectorAll(".slider").forEach(slider => {
    sessionStorage.setItem(slider.id, slider.value);
  });
  
  document.querySelectorAll("input[type=checkbox]").forEach(cb => {
    sessionStorage.setItem('cb_' + cb.value, cb.checked);
  });
  
  sessionStorage.setItem('education', document.getElementById('education').value);
  showSaveHint();
}

// 恢复所有表单数据
function restoreFormData() {
  const saved = sessionStorage.getItem('zhiCeProfile');
  if (!saved) return;
  
  try {
    const data = JSON.parse(saved);
    
    if (data.personality) {
      Object.entries(data.personality).forEach(([key, val]) => {
        const slider = document.getElementById('trait' + key);
        if (slider) {
          slider.value = val;
          const valEl = document.getElementById('trait' + key + '-val');
          if (valEl) valEl.textContent = val;
        }
      });
    }
    
    if (data.education) {
      document.getElementById('education').value = data.education;
    }
    
    document.querySelectorAll("input[type=checkbox]").forEach(cb => {
      const saved2 = sessionStorage.getItem('cb_' + cb.value);
      if (saved2 !== null) {
        cb.checked = saved2 === 'true';
      }
    });
  } catch(e) {
    console.warn('Restore failed', e);
  }
}

// 自动保存的事件绑定
function bindAutoSave() {
  document.querySelectorAll(".slider").forEach(slider => {
    slider.addEventListener("input", function() {
      document.getElementById(this.id + "-val").textContent = this.value;
      saveFormData();
    });
  });
  
  document.querySelectorAll("input[type=checkbox]").forEach(cb => {
    cb.addEventListener("change", saveFormData);
  });
  
  document.getElementById('education').addEventListener('change', saveFormData);
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
