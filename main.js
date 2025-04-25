//create function to get computer random choice for the game
function getComputerChoice(...choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    console.log(randomChoice);
}
getComputerChoice('rock', 'paper', 'scissors')

//logic to get human Input 
function getHumanChoice() {
    let humanInput = prompt(`rock, paper or scissors?`);
    if (humanInput !== null) {
        humanInput = humanInput.toLowerCase();
    }

    console.log(humanInput);

}

getHumanChoice();