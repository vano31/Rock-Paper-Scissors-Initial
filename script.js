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
        //here is where I will put the function randomRPS
    }

}


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



randomRPS();


//Below code is test








startRound();


