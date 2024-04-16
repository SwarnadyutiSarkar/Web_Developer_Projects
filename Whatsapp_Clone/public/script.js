document.addEventListener('DOMContentLoaded', () => {
    loadConversations();
});

function loadConversations() {
    fetch('http://localhost:3000/conversations')
        .then(response => response.json())
        .then(conversations => {
            const conversationList = document.getElementById('conversationList');
            conversationList.innerHTML = '';

            conversations.forEach(conversation => {
                const conversationElement = document.createElement('div');
                conversationElement.className = 'conversation';
                conversationElement.textContent = conversation.name;

                conversationElement.addEventListener('click', () => {
                    loadMessages(conversation._id);
                });

                conversationList.appendChild(conversationElement);
            });
        })
        .catch(error => console.log(error));
}

function loadMessages(conversationId) {
    fetch(`http://localhost:3000/messages/${conversationId}`)
        .then(response => response.json())
        .then(messages => {
            const messageList = document.getElementById('messageList');
            messageList.innerHTML = '';

            messages.forEach(message => {
                const messageElement = document.createElement('div');
                messageElement.className = 'message';
                messageElement.textContent = message.text;

                messageList.appendChild(messageElement);
            });
        })
        .catch(error => console.log(error));
}
