document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
});

function loadPosts() {
    fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(posts => {
            const postFeed = document.getElementById('postFeed');
            postFeed.innerHTML = '';

            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post';

                const image = document.createElement('img');
                image.src = post.image;
                postElement.appendChild(image);

                const caption = document.createElement('p');
                caption.textContent = post.caption;
                postElement.appendChild(caption);

                postFeed.appendChild(postElement);
            });
        })
        .catch(error => console.log(error));
}
