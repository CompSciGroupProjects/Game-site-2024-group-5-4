function home()
{
    window.location.href = "../";
}

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const statusDisplay = document.getElementById('status');
    const resetButton = document.getElementById('resetButton');
    let currentPlayer = 'X';
    let gameActive = true;
    const player = 'X';
    const computer = 'O';
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleCellClick(e) {
        const cell = e.target;
        const index = cell.getAttribute('data-index');

        if (cell.textContent !== '' || !gameActive) return;

        cell.textContent = currentPlayer;
        cell.classList.add('disabled');

        if (checkWin(currentPlayer)) {
            statusDisplay.textContent = `${currentPlayer} wins!`;
            gameActive = false;
            return;
        }

        if (isBoardFull()) {
            statusDisplay.textContent = 'Draw!';
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === player ? computer : player;
        statusDisplay.textContent = `Player ${currentPlayer}'s turn`;

        if (currentPlayer === computer) {
            setTimeout(computerMove, 500); // Add a small delay for better UX
        }
    }

    function computerMove() {
        let availableCells = [];
        cells.forEach(cell => {
            if (cell.textContent === '') {
                availableCells.push(cell);
            }
        });

        const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
        randomCell.textContent = computer;
        randomCell.classList.add('disabled');

        if (checkWin(computer)) {
            statusDisplay.textContent = `${computer} wins!`;
            gameActive = false;
            return;
        }

        if (isBoardFull()) {
            statusDisplay.textContent = 'Draw!';
            gameActive = false;
            return;
        }

        currentPlayer = player;
        statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    }

    function checkWin(player) {
        return winConditions.some(condition => {
            return condition.every(index => {
                return cells[index].textContent === player;
            });
        });
    }

    function isBoardFull() {
        return [...cells].every(cell => cell.textContent !== '');
    }

    function resetGame() {
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('disabled');
        });
        currentPlayer = player;
        gameActive = true;
        statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    }

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', resetGame);
});