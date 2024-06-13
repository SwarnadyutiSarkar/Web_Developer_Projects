const languages = [
    { name: "JavaScript", hint: "It's widely used for web development." },
    { name: "Python", hint: "Known for its readability and simplicity." },
    { name: "Java", hint: "Popular for enterprise applications and Android development." },
    { name: "C++", hint: "An extension of C with object-oriented features." },
    { name: "Ruby", hint: "A dynamic, open source programming language with a focus on simplicity." },
    { name: "PHP", hint: "A server scripting language often used in web development." },
    { name: "Swift", hint: "Developed by Apple for iOS and macOS development." },
    { name: "Go", hint: "Designed by Google for simplicity and performance." },
    { name: "Rust", hint: "A systems programming language focused on safety and performance." }
];

let selectedLanguage;
let hintElement;
let resultElement;
let guessInput;

window.onload = function() {
    hintElement = document.getElementById('hint');
    resultElement = document.getElementById('result');
    guessInput = document.getElementById('guessInput');
    startGame();
};

function startGame() {
    const randomIndex = Math.floor(Math.random() * languages.length);
    selectedLanguage = languages[randomIndex];
    hintElement.textContent = `Hint: ${selectedLanguage.hint}`;
    resultElement.textContent = '';
    guessInput.value = '';
}

function checkGuess() {
    const guess = guessInput.value.trim();
    if (guess.toLowerCase() === selectedLanguage.name.toLowerCase()) {
        resultElement.textContent = 'Congratulations! You guessed it right!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Sorry, that\'s not correct. Try again!';
        resultElement.style.color = 'red';
    }
}
