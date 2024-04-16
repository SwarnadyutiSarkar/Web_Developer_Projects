const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/netflixClone', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.log(error));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Netflix Clone');
});

app.get('/movies', (req, res) => {
    // Fetch movies from database
    // For simplicity, returning sample movies
    const movies = [
        { title: 'Movie 1', image: 'https://via.placeholder.com/400x600' },
        { title: 'Movie 2', image: 'https://via.placeholder.com/400x600' },
        { title: 'Movie 3', image: 'https://via.placeholder.com/400x600' },
    ];
    res.json(movies);
});

app.get('/tv-shows', (req, res) => {
    // Fetch TV shows from database
    // For simplicity, returning sample TV shows
    const tvShows = [
        { title: 'TV Show 1', image: 'https://via.placeholder.com/400x600' },
        { title: 'TV Show 2', image: 'https://via.placeholder.com/400x600' },
        { title: 'TV Show 3', image: 'https://via.placeholder.com/400x600' },
    ];
    res.json(tvShows);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
