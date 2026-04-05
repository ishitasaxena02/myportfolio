const educationData = [
    {
        id: 'matriculation',
        institute: 'CJDAV Centenary Public School',
        location: 'Meerut, India',
        reportTitle: 'Academic Report Card',
        studentName: 'Ishita Saxena',
        academicYear: '2015-16',
        degreeTitle: 'Matriculation',
        degreeSubtitle: 'Secondary Education',
        gradeValue: '10',
        gradeMax: '/10',
        gpaText: 'CGPA: 10.0/10.0'
    },
    {
        id: 'intermediate',
        institute: 'CJDAV Centenary Public School',
        location: 'Meerut, India',
        reportTitle: 'Academic Report Card',
        studentName: 'Ishita Saxena',
        academicYear: '2017-18',
        degreeTitle: 'Intermediate',
        degreeSubtitle: 'Science Stream',
        gradeValue: '95',
        gradeMax: '%',
        gpaText: 'PERCENTAGE: 95%'
    },
    {
        id: 'btech',
        institute: 'Institute of Engineering & Rural Technology',
        location: 'Prayagraj, India',
        reportTitle: 'Academic Report Card',
        studentName: 'Ishita Saxena',
        academicYear: '2018-22',
        degreeTitle: 'Bachelor of Technology',
        degreeSubtitle: 'Computer Science & Engineering',
        gradeValue: '8.87',
        gradeMax: '/10',
        gpaText: 'CGPA: 8.87/10.0'
    }
];

function createProjectorDevice() {
    return `
        <div class="education-projector-device">
            <div class="education-projector-lens"></div>
            <div class="education-projector-light-beam"></div>
        </div>
    `;
}

function createEducationCard(data) {
    return `
        <div class="education-card" data-level="${data.id}">
            <div class="education-card-header">
                ${data.institute}
                <div class="education-institute-name">${data.location}</div>
                <div class="education-institute-name">${data.reportTitle}</div>
            </div>
            <div class="education-student-section">
                <div class="education-student-label">STUDENT NAME</div>
                <div class="education-student-name">${data.studentName}</div>
                <div class="education-student-label">ACADEMIC YEAR</div>
                <div class="education-academic-year">${data.academicYear}</div>
            </div>
            <div class="education-degree-section">
                <div class="education-degree-title">${data.degreeTitle}</div>
                <div class="education-degree-subtitle">${data.degreeSubtitle}</div>
            </div>
            <div class="education-performance-section">
                <div class="education-performance-label">OVERALL PERFORMANCE</div>
                <div class="education-grade-display">
                    <div class="education-grade-value">${data.gradeValue}</div>
                    <div class="education-grade-max">${data.gradeMax}</div>
                </div>
                <div class="education-gpa-text">${data.gpaText}</div>
            </div>
        </div>
    `;
}

function renderEducationSection() {
    const educationContainer = document.getElementById('holographic-container');
    if (!educationContainer) {
        console.error('Education container not found');
        return;
    }
    
    educationContainer.innerHTML = `
        ${createProjectorDevice()}
        <div class="education-grid"></div>
    `;
    
    const educationGrid = educationContainer.querySelector('.education-grid');
    
    educationData.forEach((data, index) => {
        setTimeout(() => {
            const cardElement = document.createElement('div');
            cardElement.innerHTML = createEducationCard(data);
            const card = cardElement.firstElementChild;
            
            card.style.opacity = '0';
            card.style.transition = 'all 1s ease-out';
            
            educationGrid.appendChild(card);
            
            setTimeout(() => {
                card.style.opacity = '1';
            }, 1000);
            
        }, index * 1000);
    });
}

function setupCardInteractions() {
    const cards = document.querySelectorAll('.education-card');
    
    cards.forEach(card => {
        let animationTimeout;
        
        card.addEventListener('mouseenter', function() {
            this.style.animation = '';
            this.classList.remove('active-pulse', 'active-float');
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
        
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            clearTimeout(animationTimeout);
            this.style.animation = '';
            this.classList.remove('active-pulse', 'active-float');
            
            setTimeout(() => {
                this.classList.add('active-pulse');
            }, 10);
            
            animationTimeout = setTimeout(() => {
                this.classList.remove('active-pulse');
            }, 1500);
        });
    });
}

function setupProjectorInteractions() {
    const projector = document.querySelector('.education-projector-device');
    const projectorContainer = document.querySelector('.holographic-container');
    
    if (!projector) return;
    
    projector.addEventListener('click', function() {
        const cards = document.querySelectorAll('.education-card');
        
        projector.classList.add('projector-active');
        projectorContainer.classList.add('beam-boost');
        
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('active-float');
                
                const gradeValue = card.querySelector('.education-grade-value');
                if (gradeValue) {
                    gradeValue.style.animation = 'elegant-pulse 1s ease-in-out';
                    
                    setTimeout(() => {
                        gradeValue.style.animation = '';
                        card.classList.remove('active-float');
                    }, 1000);
                }
            }, index * 300);
        });
        
        setTimeout(() => {
            projector.classList.remove('projector-active');
            projectorContainer.classList.remove('beam-boost');
        }, 2000);
    });
}

function initialize() {
    renderEducationSection();
    
    setTimeout(() => {
        setupCardInteractions();
        setupProjectorInteractions();
    }, educationData.length * 100 + 200);
}

function initializeEducationCards() {
    initialize();
}