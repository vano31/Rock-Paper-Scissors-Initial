//Game of Rock, Paper, Scissors

let answer = prompt(`Please write either Rock, Paper, or Scissors.`);
let playerSelection = answer.toUpperCase();

function selectionChecker () {
    
    if (playerSelection === `ROCK` || playerSelection === `PAPER` || playerSelection === `SCISSORS`) { 
        playerSelection = playerSelection;
    } else {
        playerSelection = 0;
    }
    return playerSelection;
}

selectionChecker();

let computerSelection;
let roundNumber;

function startRound() {
    if (playerSelection === 0) {
        alert (`User Input Not Valid. Computer Wins Round.`);
    } else {
        alert(`Yahoo!`);
    }

}

startRound();


