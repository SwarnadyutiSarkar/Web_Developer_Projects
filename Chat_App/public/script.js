const socket = io.connect('http://localhost:3000');

socket.on('message', (message) => {
    displayMessage(message);
});

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message.trim() !== '') {
        socket.emit('sendMessage', message);
        messageInput.value = '';
    }
}

function displayMessage(message) {
    const messageBox = document.getElementById('messageBox');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageBox.appendChild(messageElement);
    messageBox.scrollTop = messageBox.scrollHeight;
}
