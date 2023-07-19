let playerScore = 0;
let computerScore = 0;

//get computer to pick randomly between rock, paper or scissors

function getComputerChoice() {
    let computerChoice = ["Rock","Paper","Scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function toUpper(string) {
    return string.toUpperCase();
}
//create a round of rock paper scissors to play.

    function playRound(playerSelection, computerSelection) {
     if (playerSelection === computerSelection) {
        return `It's a tie! ${playerSelection} to ${computerSelection}`
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore += 1;
        return "Player wins! Rock beats Scissors";

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore += 1;
        return "Player wins! Paper beats Rock";
        

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore += 1;
        return "Player wins! Scissors beats Paper";
        
    } else {
        computerScore += 1;
        return `Computer wins! ${computerSelection} beats ${playerSelection}`;
        
    }
}  

function getScore() {
    if (playerScore > computerScore) {
        console.log(`Score is ${playerScore}:${computerScore}`)
    } else if (computerScore > playerScore) {
        console.log(`Score is ${playerScore}:${computerScore}`)
    } else { 
        console.log(`Score is ${playerScore}:${computerScore}`)
    }
}


// create a 5 round game that keeps score and reports a winner or loser.

    function game() {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock, Paper or Scissors")
        playRound();
        getScore();
        console.log(playRound(playerSelection, computerSelection));
        } 

        
    game();
    game();
    game();
    game();
    game();