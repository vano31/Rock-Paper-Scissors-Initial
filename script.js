//Game of Rock, Paper, Scissors



let answer; 
let playerSelection; 


function selectionChecker () {
    
    if (playerSelection === `ROCK` || playerSelection === `PAPER` || playerSelection === `SCISSORS`) { 
        playerSelection = playerSelection;
    } else {
        playerSelection = 0;
    }
    return playerSelection;
}




let computerSelection;
let computerWins = 0;
let userWins = 0;



let i;

for (i = 0; i < 5 && computerWins < 3 && userWins < 3; i++) {
    
    startRound();
    if (computerWins === 3) {
        alert(`Sorry...The Computer won 3 out of 5 matches`);
        } else if (userWins === 3) {
            alert (`Congratulations! You won 3 out of 5 matches!`);
        } else if (i === 4) {
            alert (`Looks like it was a tie!`);
     } 
    
    let roundsLeft;
    
}



function startRound() {

    roundsLeft = 5 - i;
    answer = prompt(`Please write either Rock, Paper, or Scissors. Win 3 out of 5 rounds to win the match! You have ${userWins} wins, ${computerWins} losses, and ${roundsLeft} rounds left.`);
    playerSelection = answer.toUpperCase();
    selectionChecker();

    

    if (playerSelection === 0) {
        alert (`User Input Not Valid. Computer Wins Round.`);
        computerWins += 1;
    } else {
        randomRPS();
        compareSelection();
        
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
        
    }



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
                computerWins += 1;
            }   else if (computerSelection === `SCISSORS`) {
                alert(`Computer chose SCISSORS. You win this round! ROCK beats SCISSORS.`);
                userWins += 1;
            }   else {
                alert(`Tie! You and Computer both chose ROCK.`);
            }
            break;


        case `PAPER`:
            if (computerSelection === `SCISSORS`) {
                alert(`Computer chose SCISSORS. You lose this round. SCISSORS beat PAPER.`);
                computerWins += 1;
            }   else if (computerSelection === `ROCK`) {
                alert(`Computer chose ROCK. You win this round! PAPER beats ROCK.`);
                userWins += 1;
            }   else {
                alert(`Tie! You and Computer both chose PAPER.`);
            }
            break;


        case `SCISSORS`:
            if (computerSelection === `ROCK`) {
                alert(`Computer chose ROCK. You lose this round. ROCK beats SCISSORS.`);
                computerWins += 1;
            }   else if (computerSelection === `PAPER`) {
                alert(`Computer chose PAPER. You win this round! SCISSORS beats PAPER.`);
                userWins += 1;
            }   else {
                alert(`Tie! You and Computer both chose SCISSORS.`);
            }
            break;


    }
}



