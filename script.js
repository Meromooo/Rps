
const choices = ["Rock", "Paper", "Scissors"];


function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a draw bro!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return "YOU WIN!! LET'S GOOOOOOOO!";
    } else {
        return "YOU LOSE BITCH!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round < 6; round++) {
        const playerChoice = prompt("What Are You Playing Bro??");
        const computerChoice = getComputerChoice();

        const result = playRound(playerChoice, computerChoice);
        console.log(`Round ${round} = ${result}`);

        if (result.includes("YOU WIN!! LET'S GOOOOOOOO!")) {
            playerScore++;
        } else if (result.includes("YOU LOSE BITCH!")) {
            computerScore++
        }
    }

console.log("GAME OVER...");
console.log(`Player Score = ${playerScore}`);
console.log(`Computer Score = ${computerScore}`);

if (playerScore > computerScore) {
    console.log("Yo YOU WON THE GAME!");
} else if (computerScore > playerScore) {
    console.log("You Lost PUSSEY...");
} else {
    console.log("It's A Draw, Chill");
}
}
game();