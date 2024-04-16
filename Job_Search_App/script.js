document.addEventListener('DOMContentLoaded', () => {
    fetchJobs();

    const jobForm = document.getElementById('job-form');
    jobForm.addEventListener('submit', addJob);
});

function fetchJobs() {
    fetch('/api/jobs')
        .then(response => response.json())
        .then(jobs => displayJobs(jobs));
}

function displayJobs(jobs) {
    const jobList = document.getElementById('job-list');
    jobList.innerHTML = '';

    jobs.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.className = 'job-item';
        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
        `;
        jobList.appendChild(jobItem);
    });
}

function addJob(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const company = document.getElementById('company').value;
    const location = document.getElementById('location').value;
    const salary = document.getElementById('salary').value;

    const newJob = {
        title,
        company,
        location,
        salary
    };

    fetch('/api/jobs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
    })
    .then(response => response.json())
    .then(job => {
        const jobList = document.getElementById('job-list');
        const jobItem = document.createElement('div');
        jobItem.className = 'job-item';
        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
        `;
        jobList.appendChild(jobItem);
    });

    jobForm.reset();
}
