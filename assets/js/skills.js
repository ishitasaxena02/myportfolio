function initSkills() {
    const skillsData = [
        { id: "agile", name: "Agile", subtitle: "Methodology", icon: "assets/images/skills/agile.png" },
        { id: "c", name: "C", subtitle: "Programming", icon: "assets/images/skills/c.png" },
        { id: "cpp", name: "C++", subtitle: "Development", icon: "assets/images/skills/c++.png" },
        { id: "css3", name: "CSS3", subtitle: "Styling", icon: "assets/images/skills/css-3.png" },
        { id: "drone", name: "Drone", subtitle: "Technology", icon: "assets/images/skills/drone.png" },
        { id: "flask", name: "Flask", subtitle: "Framework", icon: "assets/images/skills/flask.png" },
        { id: "github", name: "GitHub", subtitle: "Version Control", icon: "assets/images/skills/github.png" },
        { id: "html", name: "HTML5", subtitle: "Markup", icon: "assets/images/skills/html.png" },
        { id: "java", name: "Java", subtitle: "Development", icon: "assets/images/skills/java.png" },
        { id: "jira", name: "Jira", subtitle: "Project Management", icon: "assets/images/skills/jira.png" },
        { id: "js", name: "JavaScript", subtitle: "Programming", icon: "assets/images/skills/js.png" },
        { id: "kafka", name: "Apache", subtitle: "Kafka", icon: "assets/images/skills/kafka.png" },
        { id: "mysql", name: "MySQL", subtitle: "Database", icon: "assets/images/skills/mysql.png" },
        { id: "nodejs", name: "Node.js", subtitle: "Backend", icon: "assets/images/skills/nodejs.png" },
        { id: "react", name: "React", subtitle: "Library", icon: "assets/images/skills/physics.png" },
        { id: "postgresql", name: "PostgreSQL", subtitle: "Database", icon: "assets/images/skills/postgresql.png" },
        { id: "python", name: "Python", subtitle: "Development", icon: "assets/images/skills/python.png" },
        { id: "redis", name: "Redis", subtitle: "Caching", icon: "assets/images/skills/redis.png" },
        { id: "rest", name: "REST", subtitle: "APIs", icon: "assets/images/skills/rest.png" },
        { id: "schema", name: "Schema", subtitle: "Design", icon: "assets/images/skills/schema.png" },
        { id: "sql", name: "SQL", subtitle: "Queries", icon: "assets/images/skills/sql.png" },
        { id: "sqlite", name: "SQLite", subtitle: "Database", icon: "assets/images/skills/sqlite.png" },
        { id: "system", name: "System", subtitle: "Design", icon: "assets/images/skills/system.png" },
        { id: "tensorflow", name: "TensorFlow", subtitle: "ML", icon: "assets/images/skills/tf.png" }
    ];

    const skillsContainer = document.querySelector('.skill-grid');
    
    if (skillsContainer) {
        renderSkillsIDE(skillsContainer, skillsData);
        addSkillsInteractions();
    }
}

function renderSkillsIDE(container, skills) {
    const ideHTML = `
        <div class="skills-ide-container">
            <div class="skills-ide-header">
                <div class="skills-window-controls">
                    <div class="skills-control-btn close"></div>
                    <div class="skills-control-btn minimize"></div>
                    <div class="skills-control-btn maximize"></div>
                </div>
                <div class="skills-ide-title">Portfolio.dev - Skills</div>
                <span onclick="refreshSkills()" class="skills-ide-action">🔄</span>
            </div>
            <div class="skills-ide-layout">
                <div class="skills-sidebar">
                    <div class="skills-sidebar-header">
                        📁 Tech Stack
                    </div>
                    <div class="skills-folder-tree">
                        <div class="skills-folder-item active" data-category="all">📋 All Skills</div>
                        <div class="skills-folder-item" data-category="programming">💻 Programming</div>
                        <div class="skills-folder-item" data-category="framework">🔧 Frameworks</div>
                        <div class="skills-folder-item" data-category="database">🗄️ Databases</div>
                        <div class="skills-folder-item" data-category="tools">🛠️ Tools</div>
                    </div>
                </div>
                <div class="skills-main-content">
                    <div class="skills-tab-bar">
                        <div class="skills-tab active">skills.json</div>
                    </div>
                    
                    <div class="skills-code-area">
                        <div class="skills-loading">Loading skills...</div>
                        <div class="skills-grid" id="skills-grid-content"></div>
                    </div>
                </div>
            </div>
            <div class="skills-status-bar">
                <div class="skills-status-item">
                    <span>⚡</span>
                    <span id="skills-count">${skills.length} skills loaded</span>
                </div>
                <div class="skills-status-item">
                    <span>🎯</span>
                    <span>Ready for deployment</span>
                </div>
            </div>
        </div>
    `;
    container.innerHTML = ideHTML;
    setTimeout(() => {
        renderSkillsGrid(skills);
    }, 1500);
}

function renderSkillsGrid(skills) {
    const gridContainer = document.getElementById('skills-grid-content');
    const loadingElement = document.querySelector('.skills-loading');
    
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
    gridContainer.innerHTML = skills.map(skill => `
        <div class="skills-card" data-skill="${skill.id}">
            <div class="skills-icon">
                <img src="${skill.icon}" alt="${skill.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22 viewBox=%220 0 24 24%22 fill=%22%2300ffff%22><rect width=%2224%22 height=%2224%22 rx=%224%22 fill=%22%2300ffff%22 opacity=%220.2%22/><text x=%2212%22 y=%2216%22 font-family=%22monospace%22 font-size=%2210%22 text-anchor=%22middle%22 fill=%22%2300ffff%22>${skill.name.charAt(0)}</text></svg>'">
            </div>
            <div class="skills-detail">
                <div class="skills-name">${skill.name}</div>
                <div class="skills-subtitle">${skill.subtitle}</div>
            </div>
        </div>
    `).join('');
    const cards = document.querySelectorAll('.skills-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

function addSkillsInteractions() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('skills-folder-item')) {
            document.querySelectorAll('.skills-folder-item').forEach(item => {
                item.classList.remove('active');
            });
            e.target.classList.add('active');
            const category = e.target.getAttribute('data-category');
            filterSkillsByCategory(category);
        }
        if (e.target.closest('.skills-card')) {
            const skillCard = e.target.closest('.skills-card');
            const skillId = skillCard.getAttribute('data-skill');
            showSkillDetails(skillId);
        }
    });
    const controls = document.querySelectorAll('.skills-control-btn');
    controls.forEach(control => {
        control.addEventListener('mouseenter', function() {
            this.style.boxShadow = `0 0 10px ${getComputedStyle(this).backgroundColor}`;
        });
        control.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
}

function filterSkillsByCategory(category) {
    const cards = document.querySelectorAll('.skills-card');
    const categoryMap = {
        'programming': ['c', 'cpp', 'java', 'python', 'js'],
        'framework': ['react', 'flask', 'nodejs'],
        'database': ['mysql', 'postgresql', 'sqlite', 'redis'],
        'tools': ['github', 'jira', 'agile', 'drone']
    };
    cards.forEach(card => {
        const skillId = card.getAttribute('data-skill');
        
        if (category === 'all' || (categoryMap[category] && categoryMap[category].includes(skillId))) {
            card.style.display = 'flex';
            card.style.animation = 'skills-fadeIn 0.5s ease-in-out';
        } else {
            card.style.display = 'none';
        }
    });
    const visibleCards = document.querySelectorAll('.skills-card[style*="display: block"], .skills-card:not([style*="display: none"])');
    const statusCount = document.getElementById('skills-count');
    if (statusCount) {
        statusCount.textContent = `${visibleCards.length} skills loaded`;
    }
}

function showSkillDetails(skillId) {
    const skillCard = document.querySelector(`[data-skill="${skillId}"]`);
    skillCard.style.animation = 'skills-pulse 0.6s ease-in-out';
    setTimeout(() => {
        skillCard.style.animation = '';
    }, 600);
    console.log(`Clicked on skill: ${skillId}`);
}

function refreshSkills() {
    const loadingElement = document.querySelector('.skills-loading');
    const gridContainer = document.getElementById('skills-grid-content');
    if (loadingElement && gridContainer) {
        loadingElement.style.display = 'flex';
        gridContainer.style.display = 'none';
        setTimeout(() => {
            loadingElement.style.display = 'none';
            gridContainer.style.display = 'grid';
            const cards = document.querySelectorAll('.skills-card');
            cards.forEach((card, index) => {
                card.style.animation = `skills-fadeIn 0.3s ease-in-out ${index * 0.05}s`;
            });
        }, 1000);
    }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes skills-fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes skills-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);