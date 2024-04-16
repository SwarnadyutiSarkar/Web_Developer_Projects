document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movieList');
    const moviePlayer = document.getElementById('moviePlayer');

    // Sample movie data
    const movies = [
        { id: 1, title: 'Movie 1', src: 'movie1.mp4' },
        { id: 2, title: 'Movie 2', src: 'movie2.mp4' },
        { id: 3, title: 'Movie 3', src: 'movie3.mp4' },
    ];

    // Populate movie list
    movies.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.textContent = movie.title;
        listItem.addEventListener('click', () => {
            moviePlayer.src = movie.src;
            moviePlayer.play();
        });
        movieList.appendChild(listItem);
    });
});
