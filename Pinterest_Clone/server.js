const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pinterest-clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define Pin schema and model
const pinSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    description: String,
});

const Pin = mongoose.model('Pin', pinSchema);

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// API endpoints
app.get('/api/pins', async (req, res) => {
    const pins = await Pin.find();
    res.json(pins);
});

app.post('/api/pins', async (req, res) => {
    const newPin = new Pin(req.body);
    await newPin.save();
    res.status(201).json(newPin);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
