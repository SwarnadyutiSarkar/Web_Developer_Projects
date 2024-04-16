const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/whatsappClone', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.log(error));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to WhatsApp Clone');
});

app.get('/conversations', (req, res) => {
    // Fetch conversations from database
    // For simplicity, returning sample conversations
    const conversations = [
        { _id: '1', name: 'User 1' },
        { _id: '2', name: 'User 2' },
        { _id: '3', name: 'User 3' },
    ];
    res.json(conversations);
});

app.get('/messages/:conversationId', (req, res) => {
    // Fetch messages from database by conversationId
    // For simplicity, returning sample messages
    const messages = [
        { text: 'Hello', sender: 'User 1' },
        { text: 'Hi', sender: 'User 2' },
        { text: 'How are you?', sender: 'User 1' },
    ];
    res.json(messages);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
