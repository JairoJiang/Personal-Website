// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language from localStorage or default to Chinese
    const currentLang = localStorage.getItem('language') || 'zh';
    
    // Set initial language
    setLanguage(currentLang);
    
    // Add event listeners to language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('language', lang);
        });
    });
    
    function setLanguage(lang) {
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
        
        // Update page content based on language
        if (lang === 'en') {
            setEnglishContent();
        } else {
            setChineseContent();
        }
    }
    
    function setEnglishContent() {
        // Navigation links
        const navLinks = {
            'index.html': 'Home',
            'about.html': 'About',
            'writing.html': 'Writing',
            'projects.html': 'Projects',
            'resources.html': 'Resources',
            'contact.html': 'Contact'
        };
        
        // Update navigation text
        document.querySelectorAll('.nav-links a').forEach(link => {
            const href = link.getAttribute('href');
            if (navLinks[href]) {
                link.textContent = navLinks[href];
            }
        });
        
        // Update page title and content based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        updatePageContent(currentPage, 'en');
    }
    
    function setChineseContent() {
        // Navigation links
        const navLinks = {
            'index.html': '首页',
            'about.html': '关于我',
            'writing.html': '文字创作',
            'projects.html': '成就与项目',
            'resources.html': '资源分享',
            'contact.html': '联系方式'
        };
        
        // Update navigation text
        document.querySelectorAll('.nav-links a').forEach(link => {
            const href = link.getAttribute('href');
            if (navLinks[href]) {
                link.textContent = navLinks[href];
            }
        });
        
        // Update page title and content based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        updatePageContent(currentPage, 'zh');
    }
    
    function updatePageContent(page, lang) {
        // Content translations
        const translations = {
            'index.html': {
                'zh': {
                    title: '我的简历网站 - 首页',
                    heroTitle: '你好，我是文酱不酱',
                    heroSubtitle: '热爱创作与分享的探索者',
                    heroDescription: '这里记录了我的成长历程、文字创作、项目经验与资源分享。欢迎来到我的个人空间，一起交流学习！',
                    learnMore: '了解更多',
                    contactMe: '联系我',
                    expertise: '我的专长领域',
                    writing: '文字创作',
                    writingDesc: '诗歌、散文、小说创作，用文字记录生活感悟与思考',
                    viewWorks: '查看作品 →',
                    development: '项目开发',
                    devDesc: 'Web开发、数据分析、自动化工具等项目经验分享',
                    viewProjects: '查看项目 →',
                    resources: '资源分享',
                    resourcesDesc: '精选书籍、工具、学习资源，与大家共同成长',
                    viewResources: '查看资源 →',
                    latestUpdates: '最新动态',
                    newProject: '新项目上线',
                    newProjectDesc: '完成了个人网站的重构，采用现代化的设计风格',
                    newArticle: '新文章发布',
                    newArticleDesc: '在文字创作栏目新增了《冬日随想》系列文章',
                    resourceUpdate: '资源更新',
                    resourceUpdateDesc: '在资源分享中添加了2024年推荐书单'
                },
                'en': {
                    title: 'My Portfolio Website - Home',
                    heroTitle: 'Hello, I\'m Wen Jiang',
                    heroSubtitle: 'A Creative Explorer Who Loves Sharing',
                    heroDescription: 'This is where I record my growth journey, creative writing, project experiences, and resource sharing. Welcome to my personal space, let\'s learn and grow together!',
                    learnMore: 'Learn More',
                    contactMe: 'Contact Me',
                    expertise: 'My Areas of Expertise',
                    writing: 'Creative Writing',
                    writingDesc: 'Poetry, prose, and fiction writing, recording life insights and thoughts with words',
                    viewWorks: 'View Works →',
                    development: 'Project Development',
                    devDesc: 'Web development, data analysis, automation tools and other project experience sharing',
                    viewProjects: 'View Projects →',
                    resources: 'Resource Sharing',
                    resourcesDesc: 'Curated books, tools, learning resources, growing together with everyone',
                    viewResources: 'View Resources →',
                    latestUpdates: 'Latest Updates',
                    newProject: 'New Project Launched',
                    newProjectDesc: 'Completed the reconstruction of personal website with modern design style',
                    newArticle: 'New Article Published',
                    newArticleDesc: 'Added "Winter Thoughts" series articles to the creative writing section',
                    resourceUpdate: 'Resource Update',
                    resourceUpdateDesc: 'Added 2024 recommended book list to resource sharing'
                }
            }
        };
        
        if (translations[page] && translations[page][lang]) {
            const content = translations[page][lang];
            
            // Update page title
            document.title = content.title;
            
            // Update content elements
            updateElementText('h1', content.heroTitle);
            updateElementText('.hero-subtitle', content.heroSubtitle);
            updateElementText('.hero-description', content.heroDescription);
            updateElementText('.btn-primary', content.learnMore);
            updateElementText('.btn-secondary', content.contactMe);
            updateElementText('h2', content.expertise);
            
            // Update feature cards
            const featureCards = document.querySelectorAll('.feature-card');
            if (featureCards.length >= 3) {
                updateElementText(featureCards[0].querySelector('h3'), content.writing);
                updateElementText(featureCards[0].querySelector('p'), content.writingDesc);
                updateElementText(featureCards[0].querySelector('.feature-link'), content.viewWorks);
                
                updateElementText(featureCards[1].querySelector('h3'), content.development);
                updateElementText(featureCards[1].querySelector('p'), content.devDesc);
                updateElementText(featureCards[1].querySelector('.feature-link'), content.viewProjects);
                
                updateElementText(featureCards[2].querySelector('h3'), content.resources);
                updateElementText(featureCards[2].querySelector('p'), content.resourcesDesc);
                updateElementText(featureCards[2].querySelector('.feature-link'), content.viewResources);
            }
            
            // Update latest updates section
            updateElementText('.latest-updates h2', content.latestUpdates);
            const updateItems = document.querySelectorAll('.update-item');
            if (updateItems.length >= 3) {
                updateElementText(updateItems[0].querySelector('h4'), content.newProject);
                updateElementText(updateItems[0].querySelector('p'), content.newProjectDesc);
                
                updateElementText(updateItems[1].querySelector('h4'), content.newArticle);
                updateElementText(updateItems[1].querySelector('p'), content.newArticleDesc);
                
                updateElementText(updateItems[2].querySelector('h4'), content.resourceUpdate);
                updateElementText(updateItems[2].querySelector('p'), content.resourceUpdateDesc);
            }
        }
    }
    
    function updateElementText(selector, text) {
        const element = document.querySelector(selector);
        if (element && text) {
            element.textContent = text;
        }
    }
});
