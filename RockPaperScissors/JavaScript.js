
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.options button');
    const playerScoreDisplay = document.querySelector('.playerScore .count');
    const computerScoreDisplay = document.querySelector('.computerScore .count');
    const resultDisplay = document.querySelector('.result');
    let playerScore = 0;
    let computerScore = 0;
    buttons.forEach(button => {
        button.addEventListener('click', playGame);
    });
    function playGame(e) {
        const playerSelection = e.target.className;
        const computerSelection = getComputerMove();

        const winner = determineWinner(playerSelection, computerSelection);
        updateScoreDisplay(winner, playerSelection, computerSelection);
    }
    function getComputerMove() {
        const moves = ['rock', 'paper', 'scissor'];
        const randomIndex = Math.floor(Math.random() * 3);
        return moves[randomIndex];
    }
    function determineWinner(player, computer) {
        if (player === computer) {
            return 'draw';
        } else if ((player === 'rock' && computer === 'scissor') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissor' && computer === 'paper')) {
            playerScore++;
            return 'player';
        } else {
            computerScore++;
            return 'computer';
        }
    }
    function updateScoreDisplay(winner, playerSelection, computerSelection) {
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        let resultMessage = `Player chose ${playerSelection}, Computer chose ${computerSelection}. `;
        switch (winner) {
            case 'player':
                resultMessage += 'Player wins!';
                break;
            case 'computer':
                resultMessage += 'Computer wins!';
                break;
            case 'draw':
                resultMessage += 'It\'s a draw!';
                break;
        }
        resultDisplay.textContent = resultMessage;
    }
});
