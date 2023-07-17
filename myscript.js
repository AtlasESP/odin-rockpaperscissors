//get computer to pick randomly between rock, paper or scissors

let playerScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let computerChoice = ["Rock","Paper","Scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

//create a round of rock paper scissors to play.

function playRound(playerSelection, computerSelection) {
     if (playerSelection === computerSelection) {
        return "TIE!"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "Player wins! Rock beats Scissors"
        playerScore++;

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "Player wins! Paper beats Rock"
        playerScore++;

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "Player wins! Scissors beats Paper"
        playerScore++
    } else {
        return `Computer wins! ${computerSelection} beats ${playerSelection}`
        computerScore++;
    }
}  

// create a 5 round game that keeps score and reports a winner or loser.

    function game() {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock, Paper or Scissors")
        playRound();
        console.log(playRound(playerSelection, computerSelection));
        if (playerScore === 5 || playerScore === 5) {
            if (playerScore > computerScore) {
                console.log(`Player wins! ${playerScore}:${computerScore}`)
            } else if (computerScore > playerScore) {
                console.log(`Computer wins! ${computerScore}:${playerScore}`)
            } else { 
                console.log(`It was a tie!`)
            }
        }
    }
        
    game();
    game();
    game();
    game();
    game();