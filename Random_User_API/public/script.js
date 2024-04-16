document.addEventListener('DOMContentLoaded', () => {
    const fetchBtn = document.getElementById('fetch-btn');
    const userContainer = document.getElementById('user-container');

    fetchBtn.addEventListener('click', fetchRandomUser);

    function fetchRandomUser() {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                displayUser(user);
            })
            .catch(error => {
                console.error('Error fetching random user:', error);
            });
    }

    function displayUser(user) {
        userContainer.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
            <h2>${user.name.first} ${user.name.last}</h2>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Location: ${user.location.city}, ${user.location.country}</p>
        `;
    }
});
