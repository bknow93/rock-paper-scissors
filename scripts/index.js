function computerPlay(){
    let choices = ["rock","paper","scissors"];
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function playRound(playerSelection, computerSelection){
    let playerSelection = playerSelection.toLowerCase();
}

const playerSelection = "rock"
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));