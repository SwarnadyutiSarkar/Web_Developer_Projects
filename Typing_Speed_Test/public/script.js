let timer;
let startTime;
let wordsTyped = 0;

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const userInput = document.getElementById('user-input');
    const quoteContainer = document.getElementById('quote-container');
    const timeLeft = document.getElementById('time-left');
    const wpm = document.getElementById('wpm');

    startBtn.addEventListener('click', startGame);

    function startGame() {
        const quote = 'The quick brown fox jumps over the lazy dog';
        quoteContainer.textContent = quote;
        userInput.value = '';
        userInput.focus();
        wordsTyped = 0;
        startTimer(60, timeLeft, wpm);
    }

    userInput.addEventListener('input', () => {
        const quoteWords = quoteContainer.textContent.split(' ');
        const userWords = userInput.value.split(' ');

        if (userWords.length <= quoteWords.length) {
            let correctWords = 0;
            for (let i = 0; i < userWords.length; i++) {
                if (userWords[i] === quoteWords[i]) {
                    correctWords++;
                }
            }
            wordsTyped = correctWords;
        }
    });
});

function startTimer(duration, display, wpmDisplay) {
    let timer = duration, minutes, seconds;
    startTime = Date.now();

    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            timer = duration;
            const elapsedTime = (Date.now() - startTime) / 1000 / 60;
            const wpm = Math.round(wordsTyped / elapsedTime);
            wpmDisplay.textContent = wpm;
        }
    }, 1000);
}
