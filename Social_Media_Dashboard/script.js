document.addEventListener('DOMContentLoaded', () => {
    fetchMetrics();
});

function fetchMetrics() {
    // Replace with API calls to fetch metrics data from social media platforms
    const metricsData = [
        { platform: 'Facebook', followers: 2000, likes: 1500, comments: 300 },
        { platform: 'Twitter', followers: 2500, likes: 1200, comments: 200 },
        { platform: 'Instagram', followers: 3000, likes: 1800, comments: 400 },
    ];

    displayMetrics(metricsData);
}

function displayMetrics(metricsData) {
    const metricsSection = document.getElementById('metrics');
    metricsSection.innerHTML = '';

    metricsData.forEach(metric => {
        const metricItem = document.createElement('div');
        metricItem.className = 'metric';
        metricItem.innerHTML = `
            <h3>${metric.platform}</h3>
            <p><strong>Followers:</strong> ${metric.followers}</p>
            <p><strong>Likes:</strong> ${metric.likes}</p>
            <p><strong>Comments:</strong> ${metric.comments}</p>
        `;
        metricsSection.appendChild(metricItem);
    });
}
