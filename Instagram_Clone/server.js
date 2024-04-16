const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/instagramClone', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.log(error));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Instagram Clone');
});

app.get('/posts', (req, res) => {
    // Fetch posts from database
    // For simplicity, returning sample posts
    const posts = [
        { image: 'https://via.placeholder.com/400', caption: 'Sample caption 1' },
        { image: 'https://via.placeholder.com/400', caption: 'Sample caption 2' },
        { image: 'https://via.placeholder.com/400', caption: 'Sample caption 3' },
    ];
    res.json(posts);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
