document.addEventListener('DOMContentLoaded', () => {
    fetchUserActivities();

    const activityForm = document.getElementById('activity-form');
    activityForm.addEventListener('submit', addActivity);
});

function fetchUserActivities() {
    fetch('http://localhost:3000/api/user-activities')
        .then(response => response.json())
        .then(userActivities => displayUserActivities(userActivities));
}

function displayUserActivities(userActivities) {
    const activityList = document.getElementById('activity-list');
    activityList.innerHTML = '';

    userActivities.forEach(userActivity => {
        const activityItem = document.createElement('div');
        activityItem.innerHTML = `
            <h3>${userActivity.username}</h3>
            <p><strong>Activity:</strong> ${userActivity.activity}</p>
            <p><strong>Date:</strong> ${new Date(userActivity.date).toLocaleDateString()}</p>
        `;
        activityList.appendChild(activityItem);
    });
}

function addActivity(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const activity = document.getElementById('activity').value;
    const date = document.getElementById('date').value;

    const newUserActivity = {
        username,
        activity,
        date
    };

    fetch('http://localhost:3000/api/user-activities', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserActivity)
    })
    .then(response => response.json())
    .then(userActivity => {
        const activityList = document.getElementById('activity-list');
        const activityItem = document.createElement('div');
        activityItem.innerHTML = `
            <h3>${userActivity.username}</h3>
            <p><strong>Activity:</strong> ${userActivity.activity}</p>
            <p><strong>Date:</strong> ${new Date(userActivity.date).toLocaleDateString()}</p>
        `;
        activityList.appendChild(activityItem);
    });

    activityForm.reset();
}
