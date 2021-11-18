
function computerPlay() {
    // Generate a random number b/w 0 and 2
    const possibleChoices = 3;
    let randomNum = Math.floor((Math.random() * possibleChoices)); 

    if (randomNum == 0) {
        return "Rock";
    } else if (randomNum == 1) {
        return "Paper";
    }
    else if (randomNum == 2) {
        return "Scissors";
    }
}

console.log(computerPlay());
