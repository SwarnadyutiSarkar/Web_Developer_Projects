const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/stock-trading-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define Stock schema and model
const stockSchema = new mongoose.Schema({
    symbol: String,
    name: String,
    price: Number,
});

const Stock = mongoose.model('Stock', stockSchema);

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// API endpoints
app.get('/api/stocks', async (req, res) => {
    const stocks = await Stock.find();
    res.json(stocks);
});

app.post('/api/stocks', async (req, res) => {
    const newStock = new Stock(req.body);
    await newStock.save();
    res.status(201).json(newStock);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
