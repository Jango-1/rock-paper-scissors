function getComputerChoice() {
    let num = Math.random();
    if (num <= .33) {
        return "Rock";
    }
    else if (num <= .66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}


function singleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    alert("User choice: " + playerSelection + " Computer choice: " + computerSelection);

    if (playerSelection === computerSelection) {
        return "TIE!";
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "You Lose!";
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You Win!";
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You Win!";
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "You Lose!";
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "You Lose!";
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You Win!";
    }
    else return "Please Spell Correctly.";
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Type Rock, Paper, or Scissors.", "Your Choice Here");
        const computerSelection = getComputerChoice();
        const result = singleRound(playerSelection, computerSelection);

        alert("Result: " + result);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }

        if (playerScore === 3) {
            break;
        } else if (computerScore === 3) {
            break;
        }
    }

    let finalMessage;
    if (playerScore > computerScore) {
        finalMessage = `You win! Final score: ${playerScore} - ${computerScore}. Try Again?`;
    } else if (computerScore > playerScore) {
        finalMessage = `Computer Wins! Final score: ${playerScore} - ${computerScore}. Try Again?`;
    } else {
        finalMessage = `It's a tie! Final score: ${playerScore} - ${computerScore}. Try Again?`;
    }

    alert(finalMessage);

}