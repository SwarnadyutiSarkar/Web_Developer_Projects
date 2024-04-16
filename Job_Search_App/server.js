const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let jobs = [
    { id: 1, title: 'Web Developer', company: 'TechCorp', location: 'Remote', salary: '$80,000' },
    { id: 2, title: 'Data Analyst', company: 'DataTech', location: 'New York', salary: '$70,000' },
    // Add more job listings here
];

app.get('/api/jobs', (req, res) => {
    res.json(jobs);
});

app.post('/api/jobs', (req, res) => {
    const newJob = req.body;
    newJob.id = Date.now();
    jobs.push(newJob);
    res.status(201).json(newJob);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
