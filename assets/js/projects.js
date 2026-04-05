function initProjects() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Add staggered animation delay
                const cards = entry.target.querySelectorAll('.project-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.animation = `cardSlideIn 0.6s ease-out ${index * 0.1}s both`;
                    }, index * 100);
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe projects section
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
        observer.observe(projectsSection);
    }

    // Enhanced hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add glow effect
            this.style.boxShadow = `
                0 20px 50px rgba(0, 0, 0, 0.8),
                0 0 30px rgba(0, 255, 255, 0.3),
                inset 0 0 20px rgba(255, 255, 255, 0.1)
            `;
            
            // Animate tech tags
            const techTags = this.querySelectorAll('.project-tech-tag');
            techTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'scale(1.05) translateY(-2px)';
                }, index * 50);
            });
        });

        card.addEventListener('mouseleave', function() {
            // Reset effects
            this.style.boxShadow = '';
            
            const techTags = this.querySelectorAll('.project-tech-tag');
            techTags.forEach(tag => {
                tag.style.transform = '';
            });
        });

        // Add click ripple effect
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                z-index: 1;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple animation if not exists
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
            
            .project-card {
                position: relative;
                overflow: hidden;
            }
        `;
        document.head.appendChild(style);
    }

    // Parallax effect for project icons
    window.addEventListener('scroll', () => {
        const projectIcons = document.querySelectorAll('.project-icon');
        projectIcons.forEach(icon => {
            const rect = icon.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.1;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                icon.style.transform = `translateY(${parallax}px) translateY(-5px)`;
            }
        });
    });

    // Add loading animation for tech tags
    const animateTechTags = () => {
        const techTags = document.querySelectorAll('.project-tech-tag');
        techTags.forEach((tag, index) => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                tag.style.transition = 'all 0.4s ease';
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0)';
            }, index * 100);
        });
    };

    // Initialize tech tag animations when section comes into view
    const techObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateTechTags();
                techObserver.unobserve(entry.target);
            }
        });
    });

    if (projectsSection) {
        techObserver.observe(projectsSection);
    }
}