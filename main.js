//create function to get computer random choice for the game
function getComputerChoice(...choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    return randomChoice;
}



//logic to get human Input 
function getHumanChoice() {
    let humanInput = prompt(`rock, paper or scissors?`);
    if (humanInput !== null) {
        humanInput = humanInput.toLowerCase();
    }
    return humanInput;
}



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a tie`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        return "Player";
    } else {
        return "Computer";
    }

}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const computerSelection = getComputerChoice('rock', 'paper', 'scissors')
        const humanSelection = getHumanChoice();
        const winner = playRound(computerSelection, humanSelection)

        console.log(`You chose ${humanSelection}`);
        console.log(`Computer chose ${computerSelection}`);

        if (winner === "Player") {
            console.log('You win this round');
            humanScore++
        } else if (winner === "Computer") {
            console.log('Computer wins this round');
            computerScore++;
        } else {
            console.log('This round is a tie');

        }

    }
    console.log(humanScore);
    console.log(computerScore);

    if (humanScore > computerScore) {
        console.log('congratulations, You won');

    } else if (computerScore > humanScore) {
        console.log("you lost the game");

    } else {
        console.log(`it's a tie`);

    }




}

playGame()








