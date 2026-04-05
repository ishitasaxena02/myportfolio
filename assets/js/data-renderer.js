class DataRenderer {
    constructor(data) {
        this.data = data;
    }

    // Render Skills Section
    renderSkills() {
        const skillsContainer = document.querySelector('.skill-grid');
        if (!skillsContainer) return;

        skillsContainer.innerHTML = '';
        
        this.data.skills.forEach(skill => {
            const skillHex = document.createElement('div');
            skillHex.className = 'skill-hexagon';
            skillHex.setAttribute('data-skill', skill.id);
            
            skillHex.innerHTML = `
                <div class="hex-content">
                    <div class="hex-icon">
                        <img src="${skill.icon}" alt="${skill.name}" />
                    </div>
                    <div class="hex-label">${skill.name}${skill.subtitle ? `<br>${skill.subtitle}` : ''}</div>
                </div>
            `;
            
            skillsContainer.appendChild(skillHex);
        });
    }

    // Render Projects Section
    renderProjects() {
        const projectsContainer = document.querySelector('.projects-grid');
        if (!projectsContainer) return;

        projectsContainer.innerHTML = '';
        
        this.data.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            // Generate project links
            const linksHTML = [];
            if (project.links.demo) {
                linksHTML.push(`
                    <a href="${project.links.demo}" target="_blank" class="btn-view">
                        <i class="fas fa-eye"></i> View
                    </a>
                `);
            }
            if (project.links.github) {
                linksHTML.push(`
                    <a href="${project.links.github}" target="_blank" class="btn-code">
                        Code <i class="fas fa-code"></i>
                    </a>
                `);
            }
            
            projectCard.innerHTML = `
                <div class="project-icon">${project.icon}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech-stack">
                    ${project.technologies.map(tech => `<span class="project-tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${linksHTML.join('')}
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
    }

    // Initialize all renderers
    init() {
        this.renderSkills();
        this.renderProjects();
    }
}

// Rendering is now triggered lazily by main.js when sections scroll into view

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataRenderer;
}