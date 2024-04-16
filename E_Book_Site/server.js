const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ebookSite', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.log(error));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to E-Book Site');
});

app.get('/books', (req, res) => {
    // Fetch books from database
    // For simplicity, returning sample books
    const books = [
        { title: 'Book 1', author: 'Author 1', price: 10 },
        { title: 'Book 2', author: 'Author 2', price: 15 },
        { title: 'Book 3', author: 'Author 3', price: 20 },
    ];
    res.json(books);
});

app.get('/download/:bookId', (req, res) => {
    // Fetch book file from database by bookId
    // For simplicity, returning sample PDF file
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(__dirname, 'sample.pdf');
    const file = fs.createReadStream(filePath);
    file.pipe(res);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
