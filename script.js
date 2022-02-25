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
        randomRPS();
        //this is where you put compareSelection():
        compareSelection();
    }

}

startRound();

function randomRPS() {
    let randomNumber = randomGenerator();
    randomGenerator();
    getRandomGenerator(); 

    function randomGenerator() {
        return Math.random();
    }

    
    function getRandomGenerator() {
        return randomNumber;
        //console.log(randomNumber);
    }

//How do I store a random number into a  variable permanently? Is that not  possible?

    if (randomNumber <= 0.33) {
        computerSelection = `ROCK`;
    }   else if (randomNumber > 0.33 && randomNumber < 0.66) {
        computerSelection = `PAPER`;
    }   else {
        computerSelection = `SCISSORS`;
    }

}




function compareSelection() {

    switch (playerSelection) {
        case `ROCK`:
            if (computerSelection === `PAPER`) {
                alert(`Computer chose PAPER. You lose this round. PAPER beats ROCK.`);
            }   else if (computerSelection === `SCISSORS`) {
                alert(`Computer chose SCISSORS. You win this round! ROCK beats SCISSORS.`);
            }   else {
                alert(`Tie! You and Computer both chose ROCK.`);
            }
            break;


        case `PAPER`:
            if (computerSelection === `SCISSORS`) {
                alert(`Computer chose SCISSORS. You lose this round. SCISSORS beat PAPER.`);
            }   else if (computerSelection === `ROCK`) {
                alert(`Computer chose ROCK. You win this round! PAPER beats ROCK.`);
            }   else {
                alert(`Tie! You and Computer both chose PAPER.`);
            }
            break;


        case `SCISSORS`:
            if (computerSelection === `ROCK`) {
                alert(`Computer chose ROCK. You lose this round. ROCK beats SCISSORS.`);
            }   else if (computerSelection === `PAPER`) {
                alert(`Computer chose PAPER. You win this round! SCISSORS beats PAPER.`);
            }   else {
                alert(`Tie! You and Computer both chose SCISSORS.`);
            }
            break;


    }

}

