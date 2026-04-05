function initUtils() {
    setupNavigation();
    setupKeyboardShortcuts();
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.holo-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            scrollToSection(target.substring(1));
        });
    });

    const sectionIds = Array.from(navLinks).map(link => link.getAttribute('href').substring(1));

    const observerOptions = {
        rootMargin: '-40% 0px -60% 0px',
        threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }, observerOptions);

    sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) navObserver.observe(section);
    });
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case '1': scrollToSection('home'); break;
            case '2': scrollToSection('skills'); break;
            case '3': scrollToSection('projects'); break;
            case '4': scrollToSection('contact'); break;
        }
    });
}

function createSectionObserver(sectionSelector, animationCallback, options = {}) {
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };
    
    const observerOptions = { ...defaultOptions, ...options };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Trigger the animation callback
                animationCallback(entry.target);
                
                // Add visible class for CSS animations
                entry.target.classList.add('section-visible');
                
                // Unobserve after first animation to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Find and observe the section
    const section = document.querySelector(sectionSelector);
    if (section) {
        observer.observe(section);
    } else {
        console.warn(`Section not found: ${sectionSelector}`);
    }
    
    return observer;
}

function animateElementsStaggered(elements, animationClass = 'animate-in', staggerDelay = 150) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add(animationClass);
        }, index * staggerDelay);
    });
}