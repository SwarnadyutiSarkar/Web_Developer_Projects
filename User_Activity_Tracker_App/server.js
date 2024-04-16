const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/user-activity-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define UserActivity schema and model
const userActivitySchema = new mongoose.Schema({
    username: String,
    activity: String,
    date: Date,
});

const UserActivity = mongoose.model('UserActivity', userActivitySchema);

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// API endpoints
app.get('/api/user-activities', async (req, res) => {
    const userActivities = await UserActivity.find().sort({ date: 'desc' });
    res.json(userActivities);
});

app.post('/api/user-activities', async (req, res) => {
    const newUserActivity = new UserActivity(req.body);
    await newUserActivity.save();
    res.status(201).json(newUserActivity);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
