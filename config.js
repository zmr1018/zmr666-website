// 研学设计校企合作平台配置文件
const CONFIG = {
    // 网站基本信息
    siteInfo: {
        name: "研学设计",
        subtitle: "校企合作平台",
        description: "为研学旅游企业定向提供对口地理专业在校优质专业学生资源",
        keywords: "研学设计,校企合作,地理专业,研学旅游,人才推荐",
        author: "朱旻睿",
        school: "陕西学前师范学院",
        year: "2024"
    },

    // 联系信息
    contact: {
        address: "陕西省西安市长安区陕西学前师范学院",
        phone: ["13197309266", "15330572023"],
        email: ["863159613@qq.com", "3607513945@qq.com"],
        workTime: "周一至周五9：00——22：00",
        mapUrl: "https://ditu.amap.com/search?query=%E9%99%95%E8%A5%BF%E5%AD%A6%E5%89%8D%E5%B8%88%E8%8C%83%E5%AD%A6%E9%99%A2(%E9%95%BF%E5%AE%89%E6%A0%A1%E5%8C%BA)&city=610116&id=B001D0VGJV&query_type=IDQ"
    },

    // 统计数据
    statistics: {
        cooperationEnterprises: 20,
        successCases: 100,
        jobPositions: 50,
        satisfaction: 95,
        onlineUsers: 128,
        todayConnections: 15,
        avgRating: 4.8
    },

    // 团队成员信息
    team: [
        {
            name: "朱旻睿",
            title: "项目负责人",
            description: "陕西学前师范学院人文地理与城乡规划专业，专注于研学旅游产品设计与校企合作模式创新。",
            image: "images/zmr.jpg"
        },
        {
            name: "任莹",
            title: "综合管理人",
            description: "负责平台数据整合管理，擅长研学路线设计与产品开发，具有丰富的项目实践经验。",
            image: "images/ry.jpg"
        },
        {
            name: "王昱清",
            title: "项目统筹人",
            description: "负责项目整体统筹规划，协调各方资源，确保项目顺利实施和高效运营。",
            image: "images/wyq.jpg"
        },
        {
            name: "唐汉杰",
            title: "路线规划人",
            description: "擅长路线规划与活动策划，致力于提升研学活动的专业性和趣味性。",
            image: "images/thj.jpg"
        }
    ],

    // 合作模式
    cooperationModes: [
        {
            icon: "fas fa-user-graduate",
            title: "定向人才培养",
            description: "根据企业需求，定制培养专业人才，实现精准对接。"
        },
        {
            icon: "fas fa-briefcase",
            title: "实习就业对接",
            description: "为学生和企业搭建实习与就业的桥梁。"
        },
        {
            icon: "fas fa-project-diagram",
            title: "项目合作开发",
            description: "校企联合开发研学项目，提升创新能力。"
        },
        {
            icon: "fas fa-comments",
            title: "技术交流研讨",
            description: "定期举办技术交流活动，促进经验共享。"
        },
        {
            icon: "fas fa-trophy",
            title: "比赛优秀作品支持",
            description: "为获奖作品提供展示和转化平台。"
        }
    ],

    // 资源支持
    resources: [
        {
            icon: "fas fa-user-graduate",
            title: "人才推荐",
            description: "根据企业需求，精准推荐合适的地理专业人才",
            pdfUrl: "《人才推荐：助力研学旅游，实现企业与学生双赢》.pdf"
        },
        {
            icon: "fas fa-chalkboard-teacher",
            title: "培训服务",
            description: "提供研学导游、产品设计等专业培训课程",
            pdfUrl: "《研学设计培训要点》.pdf"
        },
        {
            icon: "fas fa-project-diagram",
            title: "项目合作",
            description: "校企联合开发研学产品和路线规划项目",
            pdfUrl: "青径研学设计能力培养平台项目合作框架方案.pdf"
        },
        {
            icon: "fas fa-database",
            title: "资源共享",
            description: "提供地理信息、教学资源等专业数据库",
            pdfUrl: "研学设计能力培养平台资源共享方案.pdf"
        },
        {
            icon: "fas fa-chalkboard-teacher",
            title: "优秀师资队伍资源",
            description: "汇聚人文地理与城乡规划领域资深教授和行业专家，提供专业指导",
            url: "https://hjzy.snsy.edu.cn/szdw/jsfc.htm"
        },
        {
            icon: "fas fa-building",
            title: "优秀企业资源",
            description: "与知名研学旅游企业建立长期合作关系，提供优质就业机会"
        }
    ],

    // 动画配置
    animation: {
        loadingDuration: 2000,
        scrollThreshold: 0.1,
        numberAnimationDuration: 30,
        realTimeUpdateInterval: 5000
    },

    // 主题色彩
    theme: {
        primary: "#4a90e2",
        secondary: "#357ab7",
        accent: "#2c5aa0",
        success: "#27ae60",
        warning: "#f39c12",
        danger: "#e74c3c",
        light: "#f8f9fa",
        dark: "#2c3e50"
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
} 