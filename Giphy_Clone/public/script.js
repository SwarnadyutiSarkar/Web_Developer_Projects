document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const gifContainer = document.getElementById('gif-container');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchTerm = searchInput.value;
        searchGifs(searchTerm);
    });

    function searchGifs(searchTerm) {
        const apiKey = 'YOUR_GIPHY_API_KEY';
        const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=10`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayGifs(data.data);
            })
            .catch(error => {
                console.error('Error fetching GIFs:', error);
            });
    }

    function displayGifs(gifs) {
        gifContainer.innerHTML = '';

        gifs.forEach(gif => {
            const gifElement = document.createElement('div');
            gifElement.className = 'gif';
            gifElement.innerHTML = `<img src="${gif.images.fixed_height.url}" alt="${gif.title}">`;
            gifContainer.appendChild(gifElement);
        });
    }
});
