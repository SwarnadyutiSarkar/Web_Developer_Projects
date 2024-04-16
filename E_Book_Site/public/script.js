document.addEventListener('DOMContentLoaded', () => {
    loadBooks();
});

function loadBooks() {
    fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(books => {
            const bookList = document.getElementById('bookList');
            bookList.innerHTML = '';

            books.forEach(book => {
                const bookElement = document.createElement('div');
                bookElement.className = 'book';

                const title = document.createElement('h2');
                title.textContent = book.title;
                bookElement.appendChild(title);

                const author = document.createElement('p');
                author.textContent = `Author: ${book.author}`;
                bookElement.appendChild(author);

                const price = document.createElement('p');
                price.textContent = `Price: $${book.price}`;
                bookElement.appendChild(price);

                const downloadButton = document.createElement('button');
                downloadButton.textContent = 'Download';
                downloadButton.addEventListener('click', () => {
                    downloadBook(book._id);
                });
                bookElement.appendChild(downloadButton);

                bookList.appendChild(bookElement);
            });
        })
        .catch(error => console.log(error));
}

function downloadBook(bookId) {
    fetch(`http://localhost:3000/download/${bookId}`)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'book.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.log(error));
}
