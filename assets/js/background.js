function initBackground() {
    createNeuralNetwork();
    createMatrixRain();
    initCursor();
}

function createNeuralNetwork() {
    const neuralBg = document.getElementById('neuralBg');
    const neurons = 20;
    
    for (let i = 0; i < neurons; i++) {
        const neuron = document.createElement('div');
        neuron.className = 'neuron';
        neuron.style.left = Math.random() * 100 + '%';
        neuron.style.top = Math.random() * 100 + '%';
        neuron.style.animationDelay = Math.random() * 3 + 's';
        neuralBg.appendChild(neuron);
        
        if (i > 0 && Math.random() > 0.5) {
            const synapse = document.createElement('div');
            synapse.className = 'synapse';
            synapse.style.left = Math.random() * 100 + '%';
            synapse.style.top = Math.random() * 100 + '%';
            synapse.style.width = Math.random() * 200 + 50 + 'px';
            synapse.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            synapse.style.animationDelay = Math.random() * 4 + 's';
            neuralBg.appendChild(synapse);
        }
    }
}

function createMatrixRain() {
    const matrixRain = document.getElementById('matrixRain');
    const chars = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let i = 0; i < 20; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = Math.random() * 100 + '%';
        column.style.animationDelay = Math.random() * 8 + 's';
        column.style.animationDuration = (Math.random() * 3 + 5) + 's';
        
        let text = '';
        for (let j = 0; j < 15; j++) {
            text += chars.charAt(Math.floor(Math.random() * chars.length)) + '<br>';
        }
        column.innerHTML = text;
        matrixRain.appendChild(column);
    }
}

function initCursor() {
    const cursor = document.querySelector('.cursor');
    let trails = [];
    let cursorActivated = false;

    document.addEventListener('mousemove', (e) => {
        if (!cursorActivated) {
            document.body.classList.add('cursor-active');
            cursorActivated = true;
        }
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        document.body.appendChild(trail);
        
        trails.push(trail);
        
        setTimeout(() => {
            trail.remove();
            trails = trails.filter(t => t !== trail);
        }, 500);
        
        setTimeout(() => {
            trail.style.opacity = '0';
            trail.style.transform = 'scale(0)';
        }, 50);
    });
}