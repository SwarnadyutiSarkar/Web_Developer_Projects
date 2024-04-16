document.addEventListener('DOMContentLoaded', () => {
    fetchPins();

    const pinForm = document.getElementById('pin-form');
    pinForm.addEventListener('submit', addPin);
});

function fetchPins() {
    fetch('http://localhost:3000/api/pins')
        .then(response => response.json())
        .then(pins => displayPins(pins));
}

function displayPins(pins) {
    const pinList = document.getElementById('pin-list');
    pinList.innerHTML = '';

    pins.forEach(pin => {
        const pinItem = document.createElement('div');
        pinItem.innerHTML = `
            <img src="${pin.imageUrl}" alt="${pin.title}">
            <h3>${pin.title}</h3>
            <p>${pin.description}</p>
        `;
        pinList.appendChild(pinItem);
    });
}

function addPin(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const description = document.getElementById('description').value;

    const newPin = {
        title,
        imageUrl,
        description
    };

    fetch('http://localhost:3000/api/pins', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPin)
    })
    .then(response => response.json())
    .then(pin => {
        const pinList = document.getElementById('pin-list');
        const pinItem = document.createElement('div');
        pinItem.innerHTML = `
            <img src="${pin.imageUrl}" alt="${pin.title}">
            <h3>${pin.title}</h3>
            <p>${pin.description}</p>
        `;
        pinList.appendChild(pinItem);
    });

    pinForm.reset();
}
