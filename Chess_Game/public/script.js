let board = [];
let selectedPiece = null;

document.addEventListener('DOMContentLoaded', () => {
    generateBoard();
    placePieces();
});

function generateBoard() {
    const boardElement = document.getElementById('board');
    let isEvenRow = false;
    let cellColor;

    for (let row = 0; row < 8; row++) {
        board[row] = [];

        for (let col = 0; col < 8; col++) {
            cellColor = isEvenRow ? (col % 2 === 0 ? 'odd' : 'even') : (col % 2 === 0 ? 'even' : 'odd');
            const cell = document.createElement('div');
            cell.className = `cell ${cellColor}`;
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', handleCellClick);
            boardElement.appendChild(cell);
            board[row][col] = null;
        }

        isEvenRow = !isEvenRow;
    }
}

function placePieces() {
    const pieces = ['Rook', 'Knight', 'Bishop', 'Queen', 'King', 'Bishop', 'Knight', 'Rook'];
    const pawns = Array(8).fill('Pawn');

    // Place white pieces
    for (let col = 0; col < 8; col++) {
        board[0][col] = { type: pieces[col], color: 'white' };
        board[1][col] = { type: pawns[col], color: 'white' };
    }

    // Place black pieces
    for (let col = 0; col < 8; col++) {
        board[7][col] = { type: pieces[col], color: 'black' };
        board[6][col] = { type: pawns[col], color: 'black' };
    }

    renderBoard();
}

function renderBoard() {
    const boardElement = document.getElementById('board');

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cell = boardElement.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
            const piece = board[row][col];

            if (piece) {
                cell.innerHTML = `<div class="piece" style="background-image: url('images/${piece.color}_${piece.type}.png')"></div>`;
            } else {
                cell.innerHTML = '';
            }
        }
    }
}

function handleCellClick(event) {
    const cell = event.target;
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    const piece = board[row][col];

    if (selectedPiece) {
        // Move the selected piece
        movePiece(selectedPiece, row, col);
        selectedPiece = null;
    } else if (piece) {
        // Select a piece
        selectedPiece = { row, col };
        highlightPossibleMoves(piece, row, col);
    }
}

function movePiece(selectedPiece, newRow, newCol) {
    const { row, col } = selectedPiece;
    const piece = board[row][col];

    if (isValidMove(piece, row, col, newRow, newCol)) {
        board[newRow][newCol] = piece;
        board[row][col] = null;
        renderBoard();
    }
}

function isValidMove(piece, row, col, newRow, newCol) {
    // Implement logic to check if the move is valid for the selected piece
    // For this example, we'll allow any move
    return true;
}

function highlightPossibleMoves(piece, row, col) {
    // Implement logic to highlight possible moves for the selected piece
    // For this example, we'll highlight all empty cells
    const boardElement = document.getElementById('board');

    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            if (!board[r][c]) {
                const cell = boardElement.querySelector(`.cell[data-row="${r}"][data-col="${c}"]`);
                cell.classList.add('highlight');
            }
        }
    }
}
