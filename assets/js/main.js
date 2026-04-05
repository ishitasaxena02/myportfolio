document.addEventListener('DOMContentLoaded', () => {
    initBackground();
    initUtils();

    // Lazy-init each section when it scrolls into view
    observeSection('.about-section', () => initAbout());
    observeSection('.skill-section', () => {
        if (typeof portfolioData !== 'undefined') {
            const renderer = new DataRenderer(portfolioData);
            renderer.renderSkills();
        }
        initSkills();
    });
    observeSection('.experience-section', () => renderExperience());
    observeSection('.education-section', () => initializeEducationCards());
    observeSection('.projects-section', () => {
        if (typeof portfolioData !== 'undefined') {
            const renderer = new DataRenderer(portfolioData);
            renderer.renderProjects();
        }
        initProjects();
    });
    observeSection('.contact-section', () => initContact());
});

function observeSection(selector, initFn) {
    const section = document.querySelector(selector);
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initFn();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '100px' });

    observer.observe(section);
}
