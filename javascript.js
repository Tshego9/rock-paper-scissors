function getComputerChoice() {
const pick = ["Rock", "Paper", "Scisors"];
return pick[Math.floor(math.random() * pick.length)];
}
console.log(getComputerChoice)

function getHumanChoice() {
    const message = prompt("Hey! you are about to play a game. Please choose between Rock, Paper and Scissors.")
}
console.log(getHumanChoice)

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (computerChoice === "Rock" && humanChoice === "Paper") {
        return "You win! Paper beats Rock";
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        return "You lose! Scissors beats Paper";
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        return "You lose! Paper beats Rock";
    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        return "You lose! Rock beats Scissors";
    } else if (computerChoice === "Scissors" && humanChoice === "Rock") {
        return "You win! Rock beats Scissors";
    } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
        return "You win! Scissors beats Paper";
    } else {
    } return "Draw!";
}

const humanSelection = getHumanChoice(toLoweCase(), toUpperCase());
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(playRound)

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You won the game! Final score -You:          ${humanScore}, Computer: ${computerScore}");
    } else if (computerScore > humanScore) {
        console.log("you lost the game! Final score - You: ${humanScore}, Computer: ${computerScore}");
    } else {
        console.log("Draw! Final score - You: ${humanScore}, Computer: ${computerScore}");
    }    
}

// Start the game
playGame();