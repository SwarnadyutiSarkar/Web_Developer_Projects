let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let resultMessage = '';

    if (playerChoice === computerChoice) {
        resultMessage = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage = 'You win!';
        playerScore++;
    } else {
        resultMessage = 'Computer wins!';
        computerScore++;
    }

    updateScores();
    displayResult(resultMessage);
}

function updateScores() {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function displayResult(message) {
    document.getElementById('resultMessage').textContent = message;
}
