const experienceData = {
    experience: [
        {
            id: "liquidnitro",
            title: "Software Engineer",
            company: "Liquidnitro Games",
            duration: "Feb 2025 - Present",
            description: `<ul>
                <li>Delivering <span class="exp-highlight">clean, maintainable code</span> following industry best practices, achieving <span class="exp-highlight">95% bug-free deployments</span></li>
                <li>Minimized <span class="exp-highlight">performance issues by 30%</span> through coding standards and optimization</li>
                <li>Collaborating with <span class="exp-highlight">cross-functional teams</span> to define project requirements, consistently exceeding client satisfaction benchmarks</li>
            </ul>`,
            technologies: ["React.js", "Java Spring Boot", "MongoDB", "JavaScript", "Agile"]
        },
        {
            id: "lnt-main",
            title: "Full Stack Developer", 
            company: "L&T Technology Services",
            duration: "Jul 2022 - Jan 2025",
            description: `<ul>
                <li>Led development of <span class="exp-highlight">Recommendation Engine</span> with improved scalability and architecture</li>
                <li>Engineered responsive solutions with <span class="exp-highlight">React.js</span> and <span class="exp-highlight">Node.js</span>, boosting user interaction by <span class="exp-highlight">20%</span></li>
                <li>Implemented <span class="exp-highlight">Apache Kafka</span> for async processing, optimizing <span class="exp-highlight">PostgreSQL</span> and decreasing event latency by <span class="exp-highlight">30%</span></li>
            </ul>`,
            technologies: ["React.js", "Node.js", "Python", "Flask", "Apache Kafka", "PostgreSQL", "Redis", "Kubernetes"]
        }
    ]
};

// Render experience function
function renderExperience() {
    const timelineContainer = document.querySelector('.experience-timeline');
    if (!timelineContainer) return;

    // Reverse the array to show oldest to newest (left to right)
    const reversedExperience = [...experienceData.experience].reverse();
    
    // Create experience cards
    reversedExperience.forEach((exp, index) => {
        const experienceCard = document.createElement('div');
        experienceCard.className = 'experience-card';
        // Mark the last item (newest) as current
        if (index === reversedExperience.length - 1) {
            experienceCard.classList.add('experience-current');
        }
        
        experienceCard.innerHTML = `
            <div class="experience-icon">
                ${exp.company.charAt(0).toUpperCase()}
            </div>
            <div class="experience-header">
                <div class="experience-info">
                    <h3>${exp.title}</h3>
                    <p class="experience-company">${exp.company}</p>
                </div>
                <div class="experience-duration">${exp.duration}</div>
            </div>
            <div class="experience-description">${exp.description}</div>
            <div class="experience-technologies">
                ${exp.technologies.map(tech => `<span class="experience-tech">${tech}</span>`).join('')}
            </div>
        `;
        
        timelineContainer.appendChild(experienceCard);
    });
    
    setTimeout(() => {
        initExperience();
    }, 100);
}

// Interactive effects functions
function initExperience() {
    initCardInteractions();
    initScrollTriggers();
    initTechTagEffects();
}

function initCardInteractions() {
    const experienceCards = document.querySelectorAll('.experience-card');
    
    experienceCards.forEach(card => {
        // 3D tilt effect on mouse move
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            card.style.transform = `translateY(-15px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });

        // Hover glow effect
        card.addEventListener('mouseenter', () => {
            createHoverParticles(card);
        });
    });
}

function initScrollTriggers() {
    const experienceSection = document.querySelector('.experience-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                triggerCardReveal();
                animateWalkingMan();
            }
        });
    }, { threshold: 0.3 });

    if (experienceSection) {
        observer.observe(experienceSection);
    }
}

function triggerCardReveal() {
    const cards = document.querySelectorAll('.experience-card');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
            createSparkEffect(card);
        }, index * 300);
    });
}

function createSparkEffect(card) {
    const sparkCount = 8;
    const colors = ['#00ffff', '#ff0080'];
    
    for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        spark.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            top: 50%;
            left: 50%;
            z-index: 1000;
        `;
        
        card.appendChild(spark);
        
        const angle = (i / sparkCount) * Math.PI * 2;
        const distance = 80 + Math.random() * 40;
        
        spark.animate([
            {
                transform: 'translate(-50%, -50%) scale(0)',
                opacity: 0
            },
            {
                transform: `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1)`,
                opacity: 1,
                offset: 0.5
            },
            {
                transform: `translate(-50%, -50%) translate(${Math.cos(angle) * distance * 1.2}px, ${Math.sin(angle) * distance * 1.2}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 800,
            easing: 'ease-out'
        }).onfinish = () => spark.remove();
    }
}

function createHoverParticles(card) {
    const particleCount = 6;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00ffff;
            border-radius: 50%;
            pointer-events: none;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: 0;
        `;
        
        card.appendChild(particle);
        
        particle.animate([
            { opacity: 0, transform: 'scale(0)' },
            { opacity: 1, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0)' }
        ], {
            duration: 1200,
            delay: i * 100
        }).onfinish = () => particle.remove();
    }
}

function initTechTagEffects() {
    const techTags = document.querySelectorAll('.experience-tech');
    
    techTags.forEach(tag => {
        tag.addEventListener('click', () => {
            createRippleEffect(tag);
        });

        tag.addEventListener('mouseenter', () => {
            createElectricEffect(tag);
        });
    });
}

function createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 255, 255, 0.4);
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        margin-top: -5px;
        margin-left: -5px;
        pointer-events: none;
        z-index: 999;
    `;

    element.style.position = 'relative';
    element.appendChild(ripple);

    ripple.animate([
        { transform: 'scale(0)', opacity: 1 },
        { transform: 'scale(3)', opacity: 0 }
    ], {
        duration: 500,
        easing: 'ease-out'
    }).onfinish = () => ripple.remove();
}

function createElectricEffect(tag) {
    const electric = document.createElement('div');
    electric.style.cssText = `
        position: absolute;
        inset: -1px;
        border-radius: 20px;
        background: linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.3), transparent);
        pointer-events: none;
        opacity: 0;
    `;
    
    tag.appendChild(electric);
    
    electric.animate([
        { opacity: 0, transform: 'scale(0.9)' },
        { opacity: 1, transform: 'scale(1.05)' },
        { opacity: 0, transform: 'scale(1)' }
    ], {
        duration: 400,
        easing: 'ease-out'
    }).onfinish = () => electric.remove();
}

function animateWalkingMan() {
    const walkingMan = document.querySelector('.walking-man');
    if (!walkingMan) return;

    // Add extra glow effect when triggered
    walkingMan.style.filter = 'drop-shadow(0 0 15px rgba(0, 255, 255, 1)) drop-shadow(0 0 25px rgba(255, 0, 128, 0.5))';
    
    setTimeout(() => {
        walkingMan.style.filter = 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))';
    }, 1000);
}