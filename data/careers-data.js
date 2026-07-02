const CAREERS_DATA = {
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
        "personality": {
          "I": 4,
          "R": 2,
          "A": 4,
          "S": 2,
          "E": 2,
          "C": 3
        },
        "interests": [
          "编程",
          "设计",
          "创造"
        ],
        "skills": [
          "JavaScript",
          "HTML/CSS",
          "React/Vue",
          "UI/UX"
        ],
        "workstyle": [
          "独立工作",
          "远程办公",
          "结果导向"
        ],
        "lifestyle": [
          "较少加班",
          "灵活时间"
        ],
        "values": [
          "创造力",
          "持续学习",
          "技术深度"
        ]
      },
      "daily_activities": [
        "写代码实现界面",
        "调试bug",
        "代码评审",
        "与产品讨论需求"
      ],
      "tags": [
        "技术岗",
        "入门友好",
        "远程友好",
        "创造力"
      ],
      "emoji": "🎨",
      "color": "#3b82f6",
      "knowledge_subjects": [
        "Web前端开发",
        "JavaScript高级程序设计",
        "CSS权威指南"
      ]
    },
    {
      "id": "backend-dev",
      "name": "后端开发工程师",
      "category": "技术/互联网",
      "min_education": "大专",
      "salary_range": "10K-45K",
      "traits": {
        "personality": {
          "I": 4,
          "R": 3,
          "A": 2,
          "S": 2,
          "E": 2,
          "C": 4
        },
        "interests": [
          "编程",
          "系统设计",
          "算法"
        ],
        "skills": [
          "Java/Python/Go",
          "数据库",
          "微服务",
          "Linux"
        ],
        "workstyle": [
          "独立工作",
          "专注深度",
          "逻辑驱动"
        ],
        "lifestyle": [
          "可能有加班",
          "核心业务期忙"
        ],
        "values": [
          "技术深度",
          "稳定性",
          "架构思维"
        ]
      },
      "daily_activities": [
        "设计API接口",
        "写业务逻辑",
        "优化数据库查询",
        "排查线上问题"
      ],
      "tags": [
        "技术岗",
        "高薪",
        "逻辑型"
      ],
      "emoji": "⚙️",
      "color": "#10b981",
      "knowledge_subjects": [
        "Java核心技术",
        "Spring实战",
        "数据库系统概论",
        "计算机网络"
      ]
    },
    {
      "id": "fullstack-dev",
      "name": "全栈开发工程师",
      "category": "技术/互联网",
      "min_education": "大专",
      "salary_range": "12K-50K",
      "traits": {
        "personality": {
          "I": 3,
          "R": 2,
          "A": 4,
          "S": 3,
          "E": 2,
          "C": 3
        },
        "interests": [
          "编程",
          "产品设计",
          "解决问题"
        ],
        "skills": [
          "前后端技术",
          "数据库",
          "部署运维",
          "产品思维"
        ],
        "workstyle": [
          "独立负责",
          "快速迭代",
          "多点触达"
        ],
        "lifestyle": [
          "灵活",
          "创业公司节奏"
        ],
        "values": [
          "全面能力",
          "产品感",
          "ownership"
        ]
      },
      "daily_activities": [
        "前端写页面",
        "后端写接口",
        "部署上线",
        "技术方案设计"
      ],
      "tags": [
        "技术岗",
        "创业友好",
        "全面型"
      ],
      "emoji": "🔄",
      "color": "#8b5cf6",
      "knowledge_subjects": [
        "全栈开发",
        "Node.js实战",
        "React与Node",
        "软件工程"
      ]
    },
    {
      "id": "algorithm-engineer",
      "name": "算法工程师",
      "category": "技术/互联网",
      "min_education": "硕士",
      "salary_range": "20K-80K",
      "traits": {
        "personality": {
          "I": 5,
          "R": 3,
          "A": 2,
          "S": 1,
          "E": 1,
          "C": 3
        },
        "interests": [
          "数学",
          "研究",
          "优化"
        ],
        "skills": [
          "机器学习",
          "深度学习",
          "Python",
          "数学统计"
        ],
        "workstyle": [
          "深度研究",
          "实验驱动",
          "长周期"
        ],
        "lifestyle": [
          "较自由",
          "学术氛围"
        ],
        "values": [
          "技术前沿",
          "学术成就",
          "创新"
        ]
      },
      "daily_activities": [
        "读论文",
        "跑实验",
        "调参",
        "分析数据"
      ],
      "tags": [
        "技术岗",
        "高学历",
        "高薪",
        "研究型"
      ],
      "emoji": "🧠",
      "color": "#ef4444",
      "knowledge_subjects": [
        "机器学习",
        "深度学习",
        "统计学习方法",
        "算法导论"
      ]
    },
    {
      "id": "devops-engineer",
      "name": "运维/DevOps工程师",
      "category": "技术/互联网",
      "min_education": "大专",
      "salary_range": "10K-40K",
      "traits": {
        "personality": {
          "I": 3,
          "R": 4,
          "A": 1,
          "S": 2,
          "E": 2,
          "C": 5
        },
        "interests": [
          "系统架构",
          "自动化",
          "稳定性"
        ],
        "skills": [
          "Linux",
          "Docker/K8s",
          "CI/CD",
          "监控体系"
        ],
        "workstyle": [
          "严谨细致",
          "应急响应",
          "流程优化"
        ],
        "lifestyle": [
          "可能需要值班",
          "高压力"
        ],
        "values": [
          "稳定性",
          "自动化",
          "可靠性"
        ]
      },
      "daily_activities": [
        "维护服务器",
        "搭建CI/CD",
        "处理告警",
        "容器编排"
      ],
      "tags": [
        "技术岗",
        "系统型",
        "高压"
      ],
      "emoji": "🖥️",
      "color": "#f59e0b",
      "knowledge_subjects": [
        "Linux系统管理",
        "Docker实践",
        "Kubernetes权威指南",
        "网络协议"
      ]
    },
    {
      "id": "data-scientist",
      "name": "数据分析师",
      "category": "技术/互联网",
      "min_education": "本科",
      "salary_range": "8K-30K",
      "traits": {
        "personality": {
          "I": 3,
          "R": 3,
          "A": 3,
          "S": 3,
          "E": 2,
          "C": 4
        },
        "interests": [
          "数据",
          "商业分析",
          "可视化"
        ],
        "skills": [
          "SQL",
          "Python",
          "数据分析工具",
          "统计学"
        ],
        "workstyle": [
          "沟通协作",
          "数据驱动",
          "报告输出"
        ],
        "lifestyle": [
          "正常作息",
          "项目制"
        ],
        "values": [
          "洞察力",
          "商业理解",
          "数据叙事"
        ]
      },
      "daily_activities": [
        "取数分析",
        "做报表",
        "业务沟通",
        "数据清洗"
      ],
      "tags": [
        "技术岗",
        "入门友好",
        "沟通型"
      ],
      "emoji": "📊",
      "color": "#14b8a6",
      "knowledge_subjects": [
        "统计学",
        "SQL必知必会",
        "Python数据分析",
        "Excel高级应用"
      ]
    },
    {
      "id": "product-manager",
      "name": "产品经理",
      "category": "互联网/产品",
      "min_education": "本科",
      "salary_range": "10K-40K",
      "traits": {
        "personality": {
          "I": 1,
          "R": 1,
          "A": 5,
          "S": 4,
          "E": 4,
          "C": 3
        },
        "interests": [
          "产品设计",
          "用户研究",
          "商业策略"
        ],
        "skills": [
          "需求分析",
          "原型设计",
          "数据分析",
          "项目管理"
        ],
        "workstyle": [
          "跨部门沟通",
          "用户导向",
          "快速决策"
        ],
        "lifestyle": [
          "加班较多",
          "会议多"
        ],
        "values": [
          "用户价值",
          "商业成功",
          "影响力"
        ]
      },
      "daily_activities": [
        "写PRD",
        "和开发沟通需求",
        "数据分析",
        "竞品调研"
      ],
      "tags": [
        "非技术岗",
        "沟通型",
        "创意型"
      ],
      "emoji": "📱",
      "color": "#ec4899",
      "knowledge_subjects": [
        "产品经理方法论",
        "用户体验要素",
        "商业分析",
        "项目管理"
      ]
    },
    {
      "id": "ui-designer",
      "name": "UI/UX设计师",
      "category": "设计/创意",
      "min_education": "大专",
      "salary_range": "8K-30K",
      "traits": {
        "personality": {
          "I": 2,
          "R": 1,
          "A": 5,
          "S": 3,
          "E": 3,
          "C": 2
        },
        "interests": [
          "设计",
          "艺术",
          "用户研究"
        ],
        "skills": [
          "Figma/Sketch",
          "设计系统",
          "用户研究",
          "交互设计"
        ],
        "workstyle": [
          "创意导向",
          "迭代优化",
          "用户共情"
        ],
        "lifestyle": [
          "灵活",
          "项目制"
        ],
        "values": [
          "美学",
          "用户体验",
          "创造力"
        ]
      },
      "daily_activities": [
        "画界面",
        "做交互原型",
        "用户测试",
        "和产品讨论设计"
      ],
      "tags": [
        "设计岗",
        "创意型",
        "入门友好"
      ],
      "emoji": "🖌️",
      "color": "#f472b6",
      "knowledge_subjects": [
        "设计心理学",
        "交互设计精髓",
        "Figma实战",
        "色彩原理"
      ]
    },
    {
      "id": "game-dev",
      "name": "游戏开发工程师",
      "category": "技术/游戏",
      "min_education": "本科",
      "salary_range": "10K-40K",
      "traits": {
        "personality": {
          "I": 3,
          "R": 2,
          "A": 5,
          "S": 2,
          "E": 2,
          "C": 2
        },
        "interests": [
          "游戏",
          "图形学",
          "创意编程"
        ],
        "skills": [
          "Unity/Unreal",
          "C++/C#",
          "图形学",
          "物理引擎"
        ],
        "workstyle": [
          "项目制",
          "创意与技术结合",
          "团队协作"
        ],
        "lifestyle": [
          "项目冲刺期加班",
          "创意氛围"
        ],
        "values": [
          "创造力",
          "技术实现",
          "玩家体验"
        ]
      },
      "daily_activities": [
        "写游戏逻辑",
        "调渲染效果",
        "优化性能",
        "和美术沟通"
      ],
      "tags": [
        "技术岗",
        "创意型",
        "热爱游戏"
      ],
      "emoji": "🎮",
      "color": "#a855f7",
      "knowledge_subjects": [
        "Unity实战",
        "游戏编程模式",
        "3D数学基础",
        "计算机图形学"
      ]
    },
    {
      "id": "security-engineer",
      "name": "安全工程师",
      "category": "技术/安全",
      "min_education": "本科",
      "salary_range": "15K-50K",
      "traits": {
        "personality": {
          "I": 4,
          "R": 4,
          "A": 1,
          "S": 1,
          "E": 1,
          "C": 5
        },
        "interests": [
          "安全",
          "逆向",
          "漏洞挖掘"
        ],
        "skills": [
          "网络安全",
          "渗透测试",
          "逆向工程",
          "密码学"
        ],
        "workstyle": [
          "深度专注",
          "攻防思维",
          "持续学习"
        ],
        "lifestyle": [
          "应急响应",
          "24/7意识"
        ],
        "values": [
          "安全信念",
          "技术深度",
          "守护者心态"
        ]
      },
      "daily_activities": [
        "漏洞扫描",
        "渗透测试",
        "安全审计",
        "应急响应"
      ],
      "tags": [
        "技术岗",
        "高薪",
        "专业型"
      ],
      "emoji": "🔒",
      "color": "#dc2626",
      "knowledge_subjects": [
        "网络安全",
        "渗透测试",
        "密码学",
        "Web安全"
      ]
    },
    {
      "id": "teacher",
      "name": "教师/教育工作者",
      "category": "教育",
      "min_education": "本科",
      "salary_range": "5K-20K",
      "traits": {
        "personality": {
          "I": 1,
          "R": 2,
          "A": 3,
          "S": 5,
          "E": 4,
          "C": 3
        },
        "interests": [
          "教育",
          "沟通",
          "分享知识"
        ],
        "skills": [
          "表达能力",
          "耐心",
          "专业知识",
          "组织能力"
        ],
        "workstyle": [
          "规律作息",
          "与学生互动",
          "课程设计"
        ],
        "lifestyle": [
          "有寒暑假",
          "稳定"
        ],
        "values": [
          "育人",
          "社会贡献",
          "稳定"
        ]
      },
      "daily_activities": [
        "备课",
        "上课",
        "批改作业",
        "和学生交流"
      ],
      "tags": [
        "稳定",
        "寒暑假",
        "社会贡献"
      ],
      "emoji": "📚",
      "color": "#6366f1",
      "knowledge_subjects": [
        "教育学",
        "教育心理学",
        "学科教学法",
        "课程设计"
      ]
    },
    {
      "id": "doctor",
      "name": "医生",
      "category": "医疗健康",
      "min_education": "硕士",
      "salary_range": "10K-50K",
      "traits": {
        "personality": {
          "I": 3,
          "R": 4,
          "A": 1,
          "S": 5,
          "E": 2,
          "C": 5
        },
        "interests": [
          "医学",
          "帮助他人",
          "生命科学"
        ],
        "skills": [
          "临床技能",
          "诊断能力",
          "沟通能力",
          "抗压能力"
        ],
        "workstyle": [
          "严谨细致",
          "高责任心",
          "团队协作"
        ],
        "lifestyle": [
          "值班制",
          "高压力",
          "社会尊重"
        ],
        "values": [
          "救死扶伤",
          "责任心",
          "终身学习"
        ]
      },
      "daily_activities": [
        "查房",
        "门诊",
        "写病历",
        "手术"
      ],
      "tags": [
        "高学历",
        "高压",
        "受人尊敬",
        "稳定"
      ],
      "emoji": "🏥",
      "color": "#06b6d4",
      "knowledge_subjects": [
        "人体解剖学",
        "病理学",
        "药理学",
        "临床诊断学"
      ]
    },
    {
      "id": "freelance-writer",
      "name": "自由撰稿人/内容创作者",
      "category": "内容/媒体",
      "min_education": "不限",
      "salary_range": "3K-30K",
      "traits": {
        "personality": {
          "I": 3,
          "R": 1,
          "A": 5,
          "S": 2,
          "E": 2,
          "C": 1
        },
        "interests": [
          "写作",
          "阅读",
          "表达"
        ],
        "skills": [
          "写作能力",
          "信息搜集",
          "选题策划",
          "新媒体运营"
        ],
        "workstyle": [
          "自由安排",
          "自我驱动",
          "创作导向"
        ],
        "lifestyle": [
          "时间自由",
          "收入不稳定",
          "可居家"
        ],
        "values": [
          "创作自由",
          "表达",
          "生活方式"
        ]
      },
      "daily_activities": [
        "找选题",
        "写作",
        "编辑修改",
        "和编辑沟通"
      ],
      "tags": [
        "自由职业",
        "创作型",
        "时间自由"
      ],
      "emoji": "✍️",
      "color": "#fb923c",
      "knowledge_subjects": [
        "创意写作",
        "传播学",
        "新媒体运营",
        "编辑实务"
      ]
    },
    {
      "id": "accountant",
      "name": "会计师/财务",
      "category": "金融/财务",
      "min_education": "本科",
      "salary_range": "6K-25K",
      "traits": {
        "personality": {
          "I": 2,
          "R": 4,
          "A": 1,
          "S": 2,
          "E": 2,
          "C": 5
        },
        "interests": [
          "数字",
          "规则",
          "精确"
        ],
        "skills": [
          "会计准则",
          "财务软件",
          "Excel",
          "税务知识"
        ],
        "workstyle": [
          "严谨规范",
          "按部就班",
          "细致"
        ],
        "lifestyle": [
          "月末季末忙",
          "稳定"
        ],
        "values": [
          "精确",
          "合规",
          "稳定"
        ]
      },
      "daily_activities": [
        "做账",
        "报税",
        "出报表",
        "财务分析"
      ],
      "tags": [
        "稳定",
        "严谨型",
        "越老越值钱"
      ],
      "emoji": "💰",
      "color": "#22c55e",
      "knowledge_subjects": [
        "会计准则",
        "财务管理",
        "税法",
        "审计学"
      ]
    },
    {
      "id": "sales",
      "name": "销售/商务",
      "category": "商务/市场",
      "min_education": "大专",
      "salary_range": "5K-100K+",
      "traits": {
        "personality": {
          "I": 1,
          "R": 1,
          "A": 3,
          "S": 4,
          "E": 5,
          "C": 2
        },
        "interests": [
          "人际交往",
          "谈判",
          "挑战"
        ],
        "skills": [
          "沟通能力",
          "谈判技巧",
          "抗压能力",
          "社交能力"
        ],
        "workstyle": [
          "结果导向",
          "高社交",
          "出差多"
        ],
        "lifestyle": [
          "收入波动大",
          "应酬多",
          "时间灵活"
        ],
        "values": [
          "成就",
          "收入高",
          "自由"
        ]
      },
      "daily_activities": [
        "拜访客户",
        "电话销售",
        "谈判签约",
        "维护关系"
      ],
      "tags": [
        "高收入",
        "压力大",
        "社交型"
      ],
      "emoji": "🤝",
      "color": "#f97316",
      "knowledge_subjects": [
        "市场营销",
        "谈判技巧",
        "客户关系管理",
        "商务礼仪"
      ]
    },
    {
      "id": "hr",
      "name": "人力资源HR",
      "category": "职能/管理",
      "min_education": "本科",
      "salary_range": "6K-25K",
      "traits": {
        "personality": {
          "I": 1,
          "R": 2,
          "A": 2,
          "S": 5,
          "E": 4,
          "C": 4
        },
        "interests": [
          "与人打交道",
          "组织发展",
          "心理学"
        ],
        "skills": [
          "招聘",
          "员工关系",
          "薪酬福利",
          "劳动法规"
        ],
        "workstyle": [
          "沟通协调",
          "流程化",
          "服务导向"
        ],
        "lifestyle": [
          "正常作息",
          "稳定"
        ],
        "values": [
          "公平",
          "人文关怀",
          "组织建设"
        ]
      },
      "daily_activities": [
        "招聘面试",
        "员工关系处理",
        "绩效考核",
        "培训组织"
      ],
      "tags": [
        "稳定",
        "沟通型",
        "入门友好"
      ],
      "emoji": "👥",
      "color": "#a3e635",
      "knowledge_subjects": [
        "人力资源管理",
        "组织行为学",
        "劳动法",
        "招聘实务"
      ]
    },
    {
      "id": "entrepreneur",
      "name": "创业者/创始人",
      "category": "创业",
      "min_education": "不限",
      "salary_range": "0-无上限",
      "traits": {
        "personality": {
          "I": 2,
          "R": 1,
          "A": 5,
          "S": 3,
          "E": 5,
          "C": 1
        },
        "interests": [
          "创造价值",
          "领导力",
          "解决问题"
        ],
        "skills": [
          "综合能力",
          "领导力",
          "执行力",
          "抗挫折"
        ],
        "workstyle": [
          "全盘负责",
          "高不确定性",
          "快速决策"
        ],
        "lifestyle": [
          "高强度",
          "不规律",
          "高风险高回报"
        ],
        "values": [
          "创造",
          "自由",
          "影响力"
        ]
      },
      "daily_activities": [
        "找方向",
        "带团队",
        "谈融资",
        "解决各种问题"
      ],
      "tags": [
        "高风险",
        "高回报",
        "自由",
        "领导型"
      ],
      "emoji": "🚀",
      "color": "#eab308",
      "knowledge_subjects": [
        "创业管理",
        "商业模式",
        "领导力",
        "市场营销"
      ]
    },
    {
      "id": "writer-tech",
      "name": "技术文档工程师",
      "category": "技术/内容",
      "min_education": "本科",
      "salary_range": "8K-25K",
      "traits": {
        "personality": {
          "I": 4,
          "R": 3,
          "A": 3,
          "S": 2,
          "E": 1,
          "C": 4
        },
        "interests": [
          "写作",
          "技术",
          "教学"
        ],
        "skills": [
          "技术理解",
          "写作",
          "信息架构",
          "沟通"
        ],
        "workstyle": [
          "独立工作",
          "深度阅读",
          "精准表达"
        ],
        "lifestyle": [
          "轻松",
          "弹性工作",
          "低压力"
        ],
        "values": [
          "清晰表达",
          "帮助他人",
          "持续学习"
        ]
      },
      "daily_activities": [
        "写API文档",
        "整理技术资料",
        "和工程师沟通",
        "维护文档站"
      ],
      "tags": [
        "技术+写作",
        "低压力",
        "远程友好"
      ],
      "emoji": "📝",
      "color": "#94a3b8",
      "knowledge_subjects": [
        "技术写作",
        "信息架构",
        "API文档",
        "DITA/XML"
      ]
    },
    {
      "id": "data-engineer",
      "name": "大数据工程师",
      "category": "技术/互联网",
      "min_education": "本科",
      "salary_range": "15K-50K",
      "traits": {
        "personality": {
          "I": 4,
          "R": 4,
          "A": 1,
          "S": 2,
          "E": 1,
          "C": 4
        },
        "interests": [
          "数据",
          "架构",
          "ETL"
        ],
        "skills": [
          "Spark/Flink",
          "Hadoop",
          "数据仓库",
          "SQL"
        ],
        "workstyle": [
          "架构思维",
          "数据导向",
          "系统建设"
        ],
        "lifestyle": [
          "正常",
          "大厂节奏"
        ],
        "values": [
          "数据价值",
          "技术架构",
          "效率"
        ]
      },
      "daily_activities": [
        "搭数据管道",
        "写ETL",
        "优化数仓",
        "数据治理"
      ],
      "tags": [
        "技术岗",
        "高薪",
        "架构型"
      ],
      "emoji": "🗄️",
      "color": "#0ea5e9",
      "knowledge_subjects": [
        "大数据技术",
        "数据仓库",
        "Spark/Flink",
        "分布式系统"
      ]
    },
    {
      "id": "qa-engineer",
      "name": "测试工程师",
      "category": "技术/互联网",
      "min_education": "大专",
      "salary_range": "6K-25K",
      "traits": {
        "personality": {
          "I": 3,
          "R": 4,
          "A": 1,
          "S": 2,
          "E": 1,
          "C": 5
        },
        "interests": [
          "找bug",
          "质量",
          "自动化"
        ],
        "skills": [
          "测试方法论",
          "自动化测试",
          "性能测试",
          "细心"
        ],
        "workstyle": [
          "严谨细致",
          "重复性工作",
          "质量把关"
        ],
        "lifestyle": [
          "项目上线前忙",
          "正常作息"
        ],
        "values": [
          "质量",
          "用户体验",
          "严谨"
        ]
      },
      "daily_activities": [
        "写测试用例",
        "执行测试",
        "提bug",
        "自动化测试开发"
      ],
      "tags": [
        "技术岗",
        "入门友好",
        "严谨型"
      ],
      "emoji": "🔍",
      "color": "#84cc16",
      "knowledge_subjects": [
        "软件测试",
        "自动化测试",
        "性能测试",
        "测试用例设计"
      ]
    },
    {
      "id": "architect",
      "name": "软件架构师",
      "category": "技术/互联网",
      "min_education": "本科",
      "salary_range": "30K-80K",
      "traits": {
        "personality": {
          "I": 5,
          "R": 4,
          "A": 2,
          "S": 2,
          "E": 2,
          "C": 4
        },
        "interests": [
          "系统设计",
          "技术战略",
          "创新"
        ],
        "skills": [
          "分布式系统",
          "系统设计",
          "技术选型",
          "团队指导"
        ],
        "workstyle": [
          "全局思维",
          "决策导向",
          "技术领导"
        ],
        "lifestyle": [
          "高责任",
          "资深身份"
        ],
        "values": [
          "技术视野",
          "影响力",
          "长期思维"
        ]
      },
      "daily_activities": [
        "设计系统架构",
        "技术评审",
        "制定规范",
        "指导开发团队"
      ],
      "tags": [
        "资深岗",
        "高薪",
        "领导型",
        "经验要求高"
      ],
      "emoji": "🏗️",
      "color": "#7c3aed",
      "knowledge_subjects": [
        "软件架构",
        "设计模式",
        "分布式系统",
        "系统分析与设计"
      ]
    },
    {
      "id": "mobile-dev",
      "name": "移动端开发工程师",
      "category": "技术/互联网",
      "min_education": "大专",
      "salary_range": "10K-35K",
      "traits": {
        "personality": {
          "I": 3,
          "R": 2,
          "A": 4,
          "S": 2,
          "E": 2,
          "C": 3
        },
        "interests": [
          "移动产品",
          "编程",
          "用户体验"
        ],
        "skills": [
          "iOS/Android",
          "Flutter/RN",
          "移动架构",
          "性能优化"
        ],
        "workstyle": [
          "产品导向",
          "迭代快",
          "用户敏感"
        ],
        "lifestyle": [
          "正常",
          "大厂节奏"
        ],
        "values": [
          "用户体验",
          "技术实现",
          "产品感"
        ]
      },
      "daily_activities": [
        "开发App功能",
        "优化性能",
        "适配新机型",
        "发布上架"
      ],
      "tags": [
        "技术岗",
        "产品型"
      ],
      "emoji": "📲",
      "color": "#06b6d4",
      "knowledge_subjects": [
        "Android开发/iOS开发",
        "Flutter实战",
        "移动UI设计",
        "性能优化"
      ]
    },
    {
      "id": "ai-prompt",
      "name": "AI提示词工程师/Prompt工程师",
      "category": "技术/AI",
      "min_education": "不限",
      "salary_range": "10K-50K",
      "traits": {
        "personality": {
          "I": 3,
          "R": 2,
          "A": 5,
          "S": 2,
          "E": 2,
          "C": 2
        },
        "interests": [
          "AI",
          "语言",
          "创造"
        ],
        "skills": [
          "Prompt设计",
          "LLM原理",
          "Python",
          "逻辑思维"
        ],
        "workstyle": [
          "实验驱动",
          "创意型",
          "迭代快"
        ],
        "lifestyle": [
          "灵活",
          "前沿领域"
        ],
        "values": [
          "前沿技术",
          "创造力",
          "效率"
        ]
      },
      "daily_activities": [
        "设计prompt",
        "测试效果",
        "优化输出",
        "搭建AI工作流"
      ],
      "tags": [
        "AI",
        "新兴岗位",
        "创意型"
      ],
      "emoji": "🤖",
      "color": "#d946ef",
      "knowledge_subjects": [
        "提示词工程",
        "大模型原理",
        "自然语言处理",
        "Python编程"
      ]
    },
    {
      "id": "blockchain-dev",
      "name": "区块链开发工程师",
      "category": "技术/区块链",
      "min_education": "本科",
      "salary_range": "15K-60K",
      "traits": {
        "personality": {
          "I": 4,
          "R": 3,
          "A": 3,
          "S": 1,
          "E": 2,
          "C": 3
        },
        "interests": [
          "去中心化",
          "密码学",
          "经济模型"
        ],
        "skills": [
          "Solidity",
          "智能合约",
          "Web3",
          "Go/Rust"
        ],
        "workstyle": [
          "前沿探索",
          "开源协作",
          "社区驱动"
        ],
        "lifestyle": [
          "灵活",
          "国际化团队"
        ],
        "values": [
          "去中心化信念",
          "技术创新",
          "开放"
        ]
      },
      "daily_activities": [
        "写智能合约",
        "审计合约",
        "开发DApp",
        "参与社区"
      ],
      "tags": [
        "技术岗",
        "高薪",
        "前沿",
        "国际化"
      ],
      "emoji": "⛓️",
      "color": "#f59e0b",
      "knowledge_subjects": [
        "Solidity",
        "区块链原理",
        "密码学",
        "分布式系统"
      ]
    },
    {
      "id": "embedded-dev",
      "name": "嵌入式开发工程师",
      "category": "技术/硬件",
      "min_education": "本科",
      "salary_range": "10K-35K",
      "traits": {
        "personality": {
          "I": 4,
          "R": 5,
          "A": 1,
          "S": 1,
          "E": 1,
          "C": 4
        },
        "interests": [
          "硬件",
          "底层",
          "系统"
        ],
        "skills": [
          "C/C++",
          "RTOS",
          "单片机",
          "驱动开发"
        ],
        "workstyle": [
          "深度专注",
          "调试驱动",
          "硬件思维"
        ],
        "lifestyle": [
          "正常",
          "制造业园区"
        ],
        "values": [
          "底层原理",
          "硬件结合",
          "匠人精神"
        ]
      },
      "daily_activities": [
        "写驱动程序",
        "调试硬件",
        "电路板联调",
        "性能优化"
      ],
      "tags": [
        "技术岗",
        "底层",
        "专注型"
      ],
      "emoji": "🔧",
      "color": "#64748b",
      "knowledge_subjects": [
        "嵌入式系统",
        "C/C++",
        "RTOS",
        "计算机组成原理"
      ]
    },
    {
      "id": "project-manager",
      "name": "项目经理",
      "category": "职能/管理",
      "min_education": "本科",
      "salary_range": "10K-35K",
      "traits": {
        "personality": {
          "I": 1,
          "R": 3,
          "A": 2,
          "S": 4,
          "E": 4,
          "C": 5
        },
        "interests": [
          "组织协调",
          "计划",
          "达成目标"
        ],
        "skills": [
          "项目管理",
          "风险管理",
          "团队协调",
          "时间管理"
        ],
        "workstyle": [
          "流程驱动",
          "沟通桥梁",
          "目标导向"
        ],
        "lifestyle": [
          "压力中等",
          "正常作息"
        ],
        "values": [
          "效率",
          "秩序",
          "成就"
        ]
      },
      "daily_activities": [
        "定计划",
        "跟进度",
        "开会协调",
        "风险预警"
      ],
      "tags": [
        "管理岗",
        "沟通型",
        "组织型"
      ],
      "emoji": "📋",
      "color": "#0f766e",
      "knowledge_subjects": [
        "项目管理",
        "敏捷实践",
        "风险管理",
        "沟通管理"
      ]
    },
    {
      "id": "psychologist",
      "name": "心理咨询师",
      "category": "医疗健康",
      "min_education": "硕士",
      "salary_range": "5K-30K",
      "traits": {
        "personality": {
          "I": 2,
          "R": 2,
          "A": 3,
          "S": 5,
          "E": 3,
          "C": 2
        },
        "interests": [
          "心理学",
          "帮助他人",
          "倾听"
        ],
        "skills": [
          "心理咨询技术",
          "共情能力",
          "倾听",
          "伦理意识"
        ],
        "workstyle": [
          "一对一",
          "深度交流",
          "保密"
        ],
        "lifestyle": [
          "弹性",
          "需要督导",
          "情感消耗"
        ],
        "values": [
          "助人",
          "理解",
          "成长"
        ]
      },
      "daily_activities": [
        "做咨询",
        "写案例记录",
        "督导学习",
        "自我照护"
      ],
      "tags": [
        "助人型",
        "深度沟通",
        "情感消耗"
      ],
      "emoji": "💚",
      "color": "#84cc16",
      "knowledge_subjects": [
        "心理咨询理论",
        "异常心理学",
        "咨询技术",
        "伦理规范"
      ]
    },
    {
      "id": "civil-servant",
      "name": "公务员/事业单位",
      "category": "政府/公共事业",
      "min_education": "本科",
      "salary_range": "4K-15K",
      "traits": {
        "personality": {
          "I": 2,
          "R": 3,
          "A": 1,
          "S": 3,
          "E": 2,
          "C": 5
        },
        "interests": [
          "稳定",
          "公共服务",
          "规则"
        ],
        "skills": [
          "公文写作",
          "政策理解",
          "组织协调",
          "耐心"
        ],
        "workstyle": [
          "按部就班",
          "流程规范",
          "层级分明"
        ],
        "lifestyle": [
          "铁饭碗",
          "福利好",
          "工作生活平衡"
        ],
        "values": [
          "稳定",
          "社会贡献",
          "安全感"
        ]
      },
      "daily_activities": [
        "处理文件",
        "开会",
        "接待群众",
        "写报告"
      ],
      "tags": [
        "稳定",
        "铁饭碗",
        "入门友好"
      ],
      "emoji": "🏛️",
      "color": "#64748b",
      "knowledge_subjects": [
        "公共管理",
        "行政能力",
        "公文写作",
        "政策分析"
      ]
    },
    {
      "id": "lawyer",
      "name": "律师",
      "category": "法律",
      "min_education": "硕士",
      "salary_range": "8K-100K+",
      "traits": {
        "personality": {
          "I": 3,
          "R": 4,
          "A": 2,
          "S": 3,
          "E": 3,
          "C": 4
        },
        "interests": [
          "法律",
          "辩论",
          "正义"
        ],
        "skills": [
          "法律知识",
          "逻辑推理",
          "辩论能力",
          "文书写作"
        ],
        "workstyle": [
          "案件驱动",
          "高压",
          "独立工作"
        ],
        "lifestyle": [
          "加班多",
          "前期收入低",
          "后期高"
        ],
        "values": [
          "正义",
          "专业",
          "成就"
        ]
      },
      "daily_activities": [
        "查阅案卷",
        "写法律文书",
        "出庭",
        "客户咨询"
      ],
      "tags": [
        "高门槛",
        "前期苦",
        "后期高薪"
      ],
      "emoji": "⚖️",
      "color": "#475569",
      "knowledge_subjects": [
        "法理学",
        "民法/刑法",
        "诉讼法",
        "法律文书"
      ]
    },
    {
      "id": "photographer",
      "name": "摄影师/视频创作者",
      "category": "设计/创意",
      "min_education": "不限",
      "salary_range": "3K-30K",
      "traits": {
        "personality": {
          "I": 2,
          "R": 1,
          "A": 5,
          "S": 3,
          "E": 3,
          "C": 1
        },
        "interests": [
          "摄影",
          "旅行",
          "美学"
        ],
        "skills": [
          "摄影技术",
          "后期处理",
          "构图",
          "设备知识"
        ],
        "workstyle": [
          "项目制",
          "创作自由",
          "现场工作"
        ],
        "lifestyle": [
          "时间自由",
          "收入不稳定",
          "可旅行"
        ],
        "values": [
          "美学",
          "记录",
          "自由"
        ]
      },
      "daily_activities": [
        "拍摄",
        "后期修图",
        "接单沟通",
        "设备维护"
      ],
      "tags": [
        "自由职业",
        "创作型",
        "时间自由"
      ],
      "emoji": "📷",
      "color": "#eab308",
      "knowledge_subjects": [
        "摄影构图",
        "后期处理",
        "视频剪辑",
        "光影美学"
      ]
    },
    {
      "id": "researcher",
      "name": "科研人员/研究员",
      "category": "教育/科研",
      "min_education": "博士",
      "salary_range": "8K-30K",
      "traits": {
        "personality": {
          "I": 5,
          "R": 4,
          "A": 2,
          "S": 1,
          "E": 1,
          "C": 3
        },
        "interests": [
          "研究",
          "发现",
          "学术"
        ],
        "skills": [
          "研究方法",
          "论文写作",
          "数据分析",
          "文献检索"
        ],
        "workstyle": [
          "深度专注",
          "长周期",
          "独立"
        ],
        "lifestyle": [
          "学术自由",
          "申请基金压力",
          "稳定"
        ],
        "values": [
          "真理",
          "学术贡献",
          "知识"
        ]
      },
      "daily_activities": [
        "读文献",
        "做实验",
        "写论文",
        "参加学术会议"
      ],
      "tags": [
        "高学历",
        "学术型",
        "稳定"
      ],
      "emoji": "🔬",
      "color": "#0891b2",
      "knowledge_subjects": [
        "科学方法论",
        "学术写作",
        "实验设计",
        "专业前沿"
      ]
    },
    {
      "id": "5g-ops",
      "name": "5G运维工程师",
      "category": "通信/信息技术",
      "min_education": "大专",
      "salary_range": "8K-25K",
      "emoji": "📶",
      "color": "#7c3aed",
      "traits": {
        "personality": {
          "I": 3,
          "R": 4,
          "A": 1,
          "S": 3,
          "E": 2,
          "C": 4
        },
        "interests": [
          "通信",
          "网络",
          "运维"
        ],
        "skills": [
          "5G技术",
          "网络优化",
          "基站运维",
          "数据分析"
        ],
        "workstyle": [
          "严谨细致",
          "现场工作",
          "应急处理"
        ],
        "lifestyle": [
          "可能需要值班",
          "有补贴"
        ],
        "values": [
          "稳定性",
          "技术应用",
          "服务质量"
        ]
      },
      "daily_activities": [
        "基站维护",
        "信号测试",
        "网络优化",
        "用户投诉处理"
      ],
      "tags": [
        "技术岗",
        "5G",
        "运维",
        "入门友好"
      ],
      "knowledge_subjects": [
        "通信原理",
        "5G技术",
        "网络优化",
        "基站运维"
      ]
    },
    {
      "id": "comm-engineer",
      "name": "通信工程师",
      "category": "通信/信息技术",
      "min_education": "本科",
      "salary_range": "8K-30K",
      "emoji": "📡",
      "color": "#2563eb",
      "traits": {
        "personality": {
          "I": 4,
          "R": 3,
          "A": 2,
          "S": 2,
          "E": 2,
          "C": 4
        },
        "interests": [
          "通信",
          "信号",
          "网络"
        ],
        "skills": [
          "通信原理",
          "信号处理",
          "网络优化",
          "设备调试"
        ],
        "workstyle": [
          "严谨",
          "现场工作",
          "团队协作"
        ],
        "lifestyle": [
          "可能需要出差",
          "正常作息"
        ],
        "values": [
          "技术深度",
          "稳定性",
          "精益求精"
        ]
      },
      "daily_activities": [
        "网络规划",
        "设备调试",
        "信号优化",
        "故障排查"
      ],
      "tags": [
        "技术岗",
        "通信",
        "稳定"
      ],
      "knowledge_subjects": [
        "通信原理",
        "信号与系统",
        "5G技术",
        "无线通信"
      ]
    }
  ]
};
