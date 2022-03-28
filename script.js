//Game of Rock, Paper, Scissors


let answer; 
let playerSelection; 



let computerSelection;
let computerWins = 0;
let userWins = 0;
let tieCount = 0;
let i = 0;



function startRound() {

    compareSelection();
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
            }   else if (computerSelection === `ROCK`) {
                alert(`Tie! You and Computer both chose ROCK.`);
                tieCount += 1;
            }
            break;


        case `PAPER`:
            if (computerSelection === `SCISSORS`) {
                alert(`Computer chose SCISSORS. You lose this round. SCISSORS beat PAPER.`);
                computerWins += 1;
            }   else if (computerSelection === `ROCK`) {
                alert(`Computer chose ROCK. You win this round! PAPER beats ROCK.`);
                userWins += 1;
            }   else if (computerSelection === `PAPER`) {
                alert(`Tie! You and Computer both chose PAPER.`);
                tieCount += 1;
            }
            break;


        case `SCISSORS`:
            if (computerSelection === `ROCK`) {
                alert(`Computer chose ROCK. You lose this round. ROCK beats SCISSORS.`);
                computerWins += 1;
            }   else if (computerSelection === `PAPER`) {
                alert(`Computer chose PAPER. You win this round! SCISSORS beats PAPER.`);
                userWins += 1;
            }   else if (computerSelection === `SCISSORS`) {
                alert(`Tie! You and Computer both chose SCISSORS.`);
                tieCount += 1;
            }
            break;

    }
}


const four = document.querySelector('.four')

const rockButton = document.createElement('button');
rockButton.setAttribute('type', 'button');
rockButton.setAttribute(`id`, `ROCK`);
rockButton.classList.add(`option`);
rockButton.textContent = 'Rock';
four.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.setAttribute('type', 'button');
paperButton.setAttribute(`id`, `PAPER`);
paperButton.classList.add(`option`);
paperButton.textContent = "Paper";
four.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.setAttribute('type', 'button');
scissorsButton.setAttribute(`id`, `SCISSORS`);
scissorsButton.classList.add(`option`);
scissorsButton.textContent = "Scissors";
four.appendChild(scissorsButton);

const buttons = document.querySelectorAll(`button`);

let playerSelectionDoc = document.querySelector(`#playerSelection`);
let computerSelectionDoc = document.querySelector(`#computerSelection`);
let userWinsDoc = document.querySelector(`#userWins`);
let computerWinsDoc = document.querySelector(`#computerWins`); 
let tieDoc = document.querySelector(`#tiesDisplay`);


let messageDiv = document.createElement("div");
messageDiv.classList.add(`message`);
let outcome = document.querySelector(`.outcome`);
outcome.appendChild(messageDiv);



buttons.forEach((button) => {
    button.addEventListener(`click`, () => {
        playerSelection = button.getAttribute(`id`);
       
            i += 1
            randomRPS();
            startRound();
           
            console.log( `You chose  ${playerSelection}, computer chose ${computerSelection}. You won ${userWins} rounds, lost ${computerWins} rounds, and have tied ${tieCount} times.`);            
            playerSelectionDoc.textContent = `${playerSelection}`;
            computerSelectionDoc.textContent = `${computerSelection}`;
            userWinsDoc.textContent = `${userWins}`;
            computerWinsDoc.textContent = `${computerWins}`;
            tieDoc.textContent = `${tieCount}`;

            if (computerWins === 3) {
                messageDiv.textContent = `Sorry...The Computer won 3 out of 5 matches. Press a button to start all over.`;
                computerWins = 0;
                userWins = 0;
                i = 0;
                tieCount = 0;
                }   else if (userWins === 3) {
                    messageDiv.textContent = `Congratulations! You won 3 out of 5 matches! Press a button to start all over.`;
                    computerWins = 0;
                    userWins = 0;
                    i = 0;
                    tieCount = 0;
                }   else if (tieCount === 2 && userWins === 2) {
                    messageDiv.textContent = `Computer can't catch up anymore! You won the most out of 5 rounds! Press a button to start all over.`;
                    computerWins = 0;
                    userWins = 0;
                    i = 0;
                    tieCount = 0;
                }   else if (tieCount === 2 && computerWins === 2) {
                    messageDiv.textContent = `You can't catch up anymore... Computer won the most out of 3 rounds! Press a button to start all over.`;
                    computerWins = 0;
                    userWins = 0;
                    i = 0;
                    tieCount = 0;
                
                }   else if (i === 5) {
                    messageDiv.textContent = `Looks like it was a tie! Press a button to start all over.`;
                    computerWins = 0;
                    userWins = 0;
                    i = 0;
                    tieCount = 0;
                }
             
    }); 

});

