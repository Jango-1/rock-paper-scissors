let playerScore = 0;
let computerScore = 0;
const results = document.querySelector("div.results");
const selections = document.querySelector("div.selections");
const scoreDisplay = document.querySelector("div.score");

function getComputerChoice() {
    let num = Math.random();
    if (num <= .33) {
        return "Rock";
    } else if (num <= .66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playSingleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    
    selections.textContent = "User choice: " + playerSelection + " Computer choice: " + computerSelection;
    
    if (playerSelection === computerSelection) {
        results.textContent = "It's a tie!";
    } else if ((playerSelection === "ROCK" && computerSelection === "PAPER") ||
               (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
               (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
        computerScore++;
        results.textContent = "You Lose!";
    } else {
        playerScore++;
        results.textContent = "You Win!";
    }
    
    scoreDisplay.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
    
    checkWinner();
}

function checkWinner() {
    if (playerScore >= 5 || computerScore >= 5) {
        const winner = playerScore >= 5 ? "Player" : "Computer";
        alert(`${winner} wins the game! Final score: Player ${playerScore} - Computer ${computerScore}. Try Again?`);
        
        playerScore = 0;
        computerScore = 0;
        scoreDisplay.textContent = `Player Score: 0 - Computer Score: 0`;
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playSingleRound('rock', getComputerChoice());
});
paper.addEventListener("click", () => {
    playSingleRound('paper', getComputerChoice());
});
scissors.addEventListener("click", () => {
    playSingleRound('scissors', getComputerChoice());
});