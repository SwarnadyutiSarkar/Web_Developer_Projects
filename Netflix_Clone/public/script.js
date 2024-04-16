document.addEventListener('DOMContentLoaded', () => {
    loadMovies();
    loadTVShows();
});

function loadMovies() {
    fetch('http://localhost:3000/movies')
        .then(response => response.json())
        .then(movies => {
            const movieList = document.getElementById('movieList');
            movieList.innerHTML = '';

            movies.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.className = 'movie';

                const image = document.createElement('img');
                image.src = movie.image;
                movieElement.appendChild(image);

                const title = document.createElement('h2');
                title.textContent = movie.title;
                movieElement.appendChild(title);

                movieList.appendChild(movieElement);
            });
        })
        .catch(error => console.log(error));
}

function loadTVShows() {
    fetch('http://localhost:3000/tv-shows')
        .then(response => response.json())
        .then(tvShows => {
            const tvShowList = document.getElementById('tvShowList');
            tvShowList.innerHTML = '';

            tvShows.forEach(tvShow => {
                const tvShowElement = document.createElement('div');
                tvShowElement.className = 'tv-show';

                const image = document.createElement('img');
                image.src = tvShow.image;
                tvShowElement.appendChild(image);

                const title = document.createElement('h2');
                title.textContent = tvShow.title;
                tvShowElement.appendChild(title);

                tvShowList.appendChild(tvShowElement);
            });
        })
        .catch(error => console.log(error));
}
