let cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
let flippedCards = [];
let matchedCards = [];

document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const startBtn = document.getElementById('start-btn');

    startBtn.addEventListener('click', startGame);

    function startGame() {
        startBtn.disabled = true;
        shuffleCards();
        renderCards();
    }

    function shuffleCards() {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }

    function renderCards() {
        gameBoard.innerHTML = '';
        cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.dataset.index = index;
            cardElement.textContent = card;
            cardElement.addEventListener('click', flipCard);
            gameBoard.appendChild(cardElement);
        });
    }

    function flipCard(event) {
        const clickedCard = event.target;
        const index = clickedCard.dataset.index;

        if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(index)) {
            flippedCards.push(index);
            clickedCard.textContent = cards[index];

            if (flippedCards.length === 2) {
                checkMatch();
            }
        }
    }

    function checkMatch() {
        const card1Index = flippedCards[0];
        const card2Index = flippedCards[1];

        if (cards[card1Index] === cards[card2Index]) {
            matchedCards.push(card1Index, card2Index);
            flippedCards = [];

            if (matchedCards.length === cards.length) {
                setTimeout(() => {
                    alert('Congratulations! You won the game!');
                    startBtn.disabled = false;
                }, 500);
            }
        } else {
            setTimeout(() => {
                const card1Element = document.querySelector(`.card[data-index="${card1Index}"]`);
                const card2Element = document.querySelector(`.card[data-index="${card2Index}"]`);

                card1Element.textContent = '';
                card2Element.textContent = '';
                flippedCards = [];
            }, 1000);
        }
    }
});
