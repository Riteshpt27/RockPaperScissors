
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


    // if dPW = 0, return "You Lose! {computerSelection} beats {playerSelection}"
    // else if dPW = 1, return "You Win! {playerSelection} beats {computerSelection}"
    // else return "It's a tie! Both made the same choice"
    if (doesPlayerWin == 0) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (doesPlayerWin == 1) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `It is a Tie! Both chose ${playerSelection}`;
    }
}

const playerSelection = 'Scissors';
const computerSelection = computerPlay();
console.log("Computer Chose: " + computerSelection);
console.log(playRpsRound(playerSelection, computerSelection))