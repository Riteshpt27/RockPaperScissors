
function computerPlay() {
    // Generate a random number b/w 0 and 2
    const possibleChoices = 3;
    let randomNum = Math.floor((Math.random() * possibleChoices));

    if (randomNum == 0) {
        return "ROCK";
    } else if (randomNum == 1) {
        return "PAPER";
    }
    else if (randomNum == 2) {
        return "SCISSORS";
    }
}

// playRpsRound(playerSelection, computerSelection)
// o/p : return a string that declares a winner

function playRpsRound(playerSelection, computerSelection) {
    // convert player selection to uppercase
    playerSelection = playerSelection.toUpperCase();

    // create a variable doesPlayerWin initialized to 0 : 0 implies No
    let doesPlayerWin = 0;

    // if playerSelection = rock & computerSelection = scissor || playerSelection = paper & computerSelection = rock || playerSelection = scissor & computerSelection = paper, then dPW = 1
    // else if playerSelection = computerSelection , then dpW = 2
    if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')) {
        doesPlayerWin = 1;
    } else if (playerSelection === computerSelection){
        doesPlayerWin = 2;
    }

    return doesPlayerWin;
}


function getUserInput() {
    let userInputInvalid = true;
    let userInput;
    while(userInputInvalid) {
        userInput = prompt("Your choice?").toUpperCase();
        if (userInput === 'ROCK' || userInput === 'SCISSORS' || userInput === 'PAPER') {
            userInputInvalid = false;
        }
    }
    return userInput;
}

// game() : play a 5 round game of rps
function game() {
    // create roundsWonPlayer and roundWonComputer = 0
    let roundsWonPlayer = 0;
    let roundWonComputer = 0;
    const numberOfRounds = 5;
    // for i -> 0 to 4

    for (let i = 0; i < numberOfRounds; i++) {

        // get playerinput using prompt
        const playerInput = getUserInput();

        // get computerinput by calling computerPlay
        const computerInput = computerPlay();

        // play one round
        const roundResult = playRpsRound(playerInput, computerInput);

        // if it returns 0 : increment rWC
        if (roundResult === 0) {
            console.log(`You lose this round. ${computerInput} beats ${playerInput}`);
            roundWonComputer++;
        } else if (roundResult === 1) { // else if it returns 1 : increment rWP
            console.log(`You win this round. ${playerInput} beats ${computerInput}`);
            roundsWonPlayer++;
        }
        else {
            console.log(`It is tie. Both chose ${playerInput}`);
        }
    }   
    
    // if rWP > rWC, then print You Won!
    if (roundsWonPlayer > roundWonComputer) {
        return 'You Win';
    } else if (roundsWonPlayer < roundWonComputer) { // else if rWP < rWC, then print You Lose!
        return 'You Lose'
    } else { // else print It is a tie!
        return 'It is a tie';
    }
    
}

console.log(game());