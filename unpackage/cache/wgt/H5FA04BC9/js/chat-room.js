document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-btn');
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    const chatPartnerName = document.getElementById('chat-partner-name');
    const messageContainer = document.getElementById('message-container');
    const queryParams = new URLSearchParams(window.location.search);
    const username = queryParams.get('username');

    chatPartnerName.textContent = username;

    backButton.addEventListener('click', function() {
        window.location.href = 'chat.html';
    });

    sendBtn.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message === '') return;

        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `我: ${message}`;
        messageContainer.appendChild(messageElement);

        messageInput.value = '';
        messageContainer.scrollTop = messageContainer.scrollHeight;
    });

    messageInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendBtn.click();
        }
    });
});