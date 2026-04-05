function initContact() {
    const sendBtn = document.querySelector('.contact-send-btn');
    if (!sendBtn) return;

    sendBtn.addEventListener('click', function () {
        const nameInput = document.querySelector('.contact-field:nth-child(1) .contact-input');
        const emailInput = document.querySelector('.contact-field:nth-child(2) .contact-input');
        const messageInput = document.querySelector('.contact-textarea');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const message = messageInput ? messageInput.value.trim() : '';

        if (!name || !email || !message) {
            sendBtn.style.borderColor = '#ff5f56';
            sendBtn.style.color = '#ff5f56';
            sendBtn.innerHTML = '<span class="contact-prompt">!</span> Please fill all fields';
            setTimeout(() => {
                sendBtn.style.borderColor = '';
                sendBtn.style.color = '';
                sendBtn.innerHTML = '<span class="contact-prompt">$</span> send --priority high';
            }, 2000);
            return;
        }

        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        window.open(`mailto:ishita8334@gmail.com?subject=${subject}&body=${body}`, '_self');

        sendBtn.style.borderColor = '#28ca42';
        sendBtn.style.color = '#28ca42';
        sendBtn.innerHTML = '<span class="contact-prompt">✓</span> Opening mail client...';
        setTimeout(() => {
            sendBtn.style.borderColor = '';
            sendBtn.style.color = '';
            sendBtn.innerHTML = '<span class="contact-prompt">$</span> send --priority high';
            if (nameInput) nameInput.value = '';
            if (emailInput) emailInput.value = '';
            if (messageInput) messageInput.value = '';
        }, 3000);
    });
}
