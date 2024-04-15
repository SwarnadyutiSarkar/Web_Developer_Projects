document.getElementById('shorten').addEventListener('click', () => {
    const url = document.getElementById('url').value;
    
    // Normally, you'd make an API request to a backend server to shorten the URL
    // For this example, we'll just generate a random short URL
    const shortenedUrl = generateShortUrl();
    
    document.getElementById('shortenedUrl').value = shortenedUrl;
});

document.getElementById('copy').addEventListener('click', () => {
    const shortenedUrl = document.getElementById('shortenedUrl');
    if (shortenedUrl.value) {
        shortenedUrl.select();
        document.execCommand('copy');
        alert('Shortened URL copied to clipboard!');
    }
});

function generateShortUrl() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortUrl = 'https://sh.rt/';
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shortUrl += characters[randomIndex];
    }
    return shortUrl;
}
