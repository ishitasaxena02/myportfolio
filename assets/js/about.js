const conversationData = [
    {
        question: "Hey, can you tell me about Ishita Saxena?",
        answer: `<div class="about-ai-response">
            <p>Of course!</p>
            <p>Ishita Saxena is a results-driven <span class="about-highlight">Software Engineer</span> with experience in building <span class="about-highlight">scalable applications</span> and <span class="about-highlight">data-driven solutions</span> across gaming, technology, and enterprise domains. She's passionate about solving <span class="about-highlight">real-world problems</span> and creating seamless user experiences.</p>
            <p>She believes in the following Philosophy</p>
            <div class="about-philosophy-quote">
                <span class="about-quote-mark">"</span>
                Code is poetry written in logic
                <span class="about-quote-mark">"</span>
            </div>
        </div>`
    },
    {
        question: "What kind of work does she usually do?",
        answer: `<div class="about-ai-response">
            <p>She loves working on <span class="about-highlight">full-stack development</span> and has hands-on experience with <span class="about-highlight">Python</span>, <span class="about-highlight">JavaScript</span>, <span class="about-highlight">React.js</span>, <span class="about-highlight">Node.js</span>, and <span class="about-highlight">cloud platforms</span>.</p>
            <p>Over the past few years, she has delivered <span class="about-highlight">high-performance systems</span> that improve reliability and enhance usability. Her projects range from <span class="about-highlight">dashboards</span> and <span class="about-highlight">predictive models</span> to <span class="about-highlight">reusable component libraries</span> — always focusing on clean, maintainable code.</p>
        </div>`
    },
    {
        question: "How can I know more or reach out to her?",
        answer: `<div class="about-ai-response">
            <p>You can check out her complete profile and connect with her here:</p>
            <div class="about-chat-actions" id="about-ai-actions">
                <a href="assets/Resume.pdf" class="about-action-btn primary" target="_blank">
                    <span class="about-btn-icon">📄</span>
                    <span class="about-btn-text">Download Resume</span>
                </a>
                <a href="#contact" class="about-action-btn secondary">
                    <span class="about-btn-icon">💬</span>
                    <span class="about-btn-text">Let's Connect</span>
                </a>
            </div>
        </div>`
    }
];

let currentConversationIndex = 0;
let isAnimationRunning = false;

function initAbout() {
    const aboutSection = document.querySelector('.about-section');
    
    if (aboutSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isAnimationRunning) {
                    startConversationAnimation();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '50px' });

        observer.observe(aboutSection);
    } else {
        console.error('About section not found!');
    }
    addInputHoverEffect();
    initChatbotToggle();
}

function createUserMessage(question) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'about-message about-user-message';
    messageDiv.innerHTML = `
        <div class="about-message-content">
            <p>${question}</p>
        </div>
        <div class="about-message-time">Just now</div>
    `;
    return messageDiv;
}

function createAIMessage(answer) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'about-message about-ai-message';
    messageDiv.innerHTML = `
        <div class="about-message-content">
            <div class="about-typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="about-ai-response-content" style="display: none;">
                ${answer}
            </div>
        </div>
        <div class="about-message-time">Typing...</div>
    `;
    return messageDiv;
}

function simulateInputTyping(text, inputField) {
    return new Promise((resolve) => {
        let index = 0;
        inputField.value = '';
        inputField.focus({ preventScroll: true });
        
        const typeInterval = setInterval(() => {
            if (index < text.length) {
                inputField.value += text.charAt(index);
                index++;
                const chatMessages = document.getElementById('chat-messages');
                chatMessages.scrollTop = chatMessages.scrollHeight;
            } else {
                clearInterval(typeInterval);
                resolve();
            }
        }, 20 + Math.random() * 20);
    });
}

function simulateSendClick(sendBtn) {
    return new Promise((resolve) => {
        sendBtn.style.transform = 'scale(0.95)';
        sendBtn.style.background = 'rgba(0, 255, 255, 0.4)';
        
        setTimeout(() => {
            sendBtn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                sendBtn.style.transform = '';
                sendBtn.style.background = '';
                resolve();
            }, 100);
        }, 150);
    });
}

function clearInputField(inputField) {
    return new Promise((resolve) => {
        inputField.value = '';
        inputField.blur();
        resolve();
    });
}

function animateMessage(messageElement, delay = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            messageElement.style.animationDelay = '0s';
            resolve();
        }, delay);
    });
}

function showAIResponse(aiMessage) {
    return new Promise((resolve) => {
        const typingIndicator = aiMessage.querySelector('.about-typing-indicator');
        const responseContent = aiMessage.querySelector('.about-ai-response-content');
        const messageTime = aiMessage.querySelector('.about-message-time');

        setTimeout(() => {
            typingIndicator.style.display = 'none';
            responseContent.style.display = 'flex';
            messageTime.textContent = 'Just now';
            resolve();
        }, 2000);
    });
}

async function addConversationPair(questionText, answerText) {
    const chatMessages = document.getElementById('chat-messages');
    const inputField = document.querySelector('.about-chat-input-field');
    const sendBtn = document.querySelector('.about-chat-send-btn');
    await simulateInputTyping(questionText, inputField);
    await new Promise(resolve => setTimeout(resolve, 800));
    await simulateSendClick(sendBtn);
    await clearInputField(inputField);
    const userMessage = createUserMessage(questionText);
    chatMessages.appendChild(userMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    await animateMessage(userMessage, 200);
    const aiMessage = createAIMessage(answerText);
    chatMessages.appendChild(aiMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    await animateMessage(aiMessage, 300);
    await showAIResponse(aiMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function startConversationAnimation() {
    if (isAnimationRunning) return;
    
    isAnimationRunning = true;
    const chatMessages = document.getElementById('chat-messages');
    const inputField = document.querySelector('.about-chat-input-field');
    
    chatMessages.innerHTML = '';
    if (inputField) {
        inputField.value = '';
        inputField.placeholder = 'Type your message...';
    }

    for (let i = 0; i < conversationData.length; i++) {
        const { question, answer } = conversationData[i];
        if (i > 0) {
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
        
        await addConversationPair(question, answer);
    }
    
    if (inputField) {
        inputField.placeholder = 'Type your message...';
    }
    
    setTimeout(() => {
        isAnimationRunning = false;
    }, 1000);
}

function initChatbotToggle() {
    const toggle = document.getElementById('about-chatbot-toggle');
    const chatbot = document.querySelector('.about-chatbot-interface');

    if (toggle && chatbot) {
        toggle.addEventListener('click', () => {
            chatbot.classList.toggle('hidden');

            const icon = toggle.querySelector('.about-toggle-icon');
            if (icon) {
                if (chatbot.classList.contains('hidden')) {
                    icon.textContent = '💬';
                } else {
                    icon.textContent = '✕';
                    if (!isAnimationRunning) {
                        setTimeout(() => {
                            startConversationAnimation();
                        }, 800);
                    }
                }
            }
        });
    } else {
        if (!toggle) console.warn('Chatbot toggle button not found');
        if (!chatbot) console.warn('Chatbot interface not found');
    }
}

function restartConversation() {
    if (!isAnimationRunning) {
        startConversationAnimation();
    }
}

document.addEventListener('click', function(e) {
    const chatMessages = document.getElementById('chat-messages');
    const inputField = document.querySelector('.about-chat-input-field');
    const sendBtn = document.querySelector('.about-chat-send-btn');

    if (inputField && inputField.contains(e.target)) return;
    if (sendBtn && sendBtn.contains(e.target)) return;
    
    if (chatMessages && chatMessages.contains(e.target) && !isAnimationRunning) {
        setTimeout(() => {
            startConversationAnimation();
        }, 300);
    }
});

function addInputHoverEffect() {
    const inputField = document.querySelector('.about-chat-input-field');
    if (inputField) {
        inputField.addEventListener('focus', () => {
            if (!isAnimationRunning) {
                inputField.style.background = 'rgba(255, 255, 255, 0.15)';
            }
        });
        
        inputField.addEventListener('blur', () => {
            if (!isAnimationRunning) {
                inputField.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        });
    }
}

window.aboutChatbot = {
    restart: restartConversation,
    init: initAbout
};