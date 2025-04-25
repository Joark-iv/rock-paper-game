//create function to get computer random choice for the game
function getComputerChoice(...choices){
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
console.log(randomChoice);
}

getComputerChoice('rock','paper','scissors')
