document.addEventListener('DOMContentLoaded', () => {
    fetchUsers();

    const userForm = document.getElementById('user-form');
    userForm.addEventListener('submit', addUser);
});

function fetchUsers() {
    fetch('http://localhost:3000/api/users')
        .then(response => response.json())
        .then(users => displayUsers(users));
}

function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.innerHTML = `
            <h3>${user.username}</h3>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>Gender:</strong> ${user.gender}</p>
            <p><strong>Bio:</strong> ${user.bio}</p>
            <p><strong>Interests:</strong> ${user.interests.join(', ')}</p>
        `;
        userList.appendChild(userItem);
    });
}

function addUser(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const bio = document.getElementById('bio').value;
    const interests = document.getElementById('interests').value.split(',').map(i => i.trim());

    const newUser = {
        username,
        age,
        gender,
        bio,
        interests
    };

    fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(user => {
        const userList = document.getElementById('user-list');
        const userItem = document.createElement('div');
        userItem.innerHTML = `
            <h3>${user.username}</h3>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>Gender:</strong> ${user.gender}</p>
            <p><strong>Bio:</strong> ${user.bio}</p>
            <p><strong>Interests:</strong> ${user.interests.join(', ')}</p>
        `;
        userList.appendChild(userItem);
    });

    userForm.reset();
}
