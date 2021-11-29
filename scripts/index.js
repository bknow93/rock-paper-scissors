function computerPlay(){
    let choices = ["rock","paper","scissors"];
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function playRound(playerSelection, computerSelection){
    //to be made
}

const playerSelection = "rock"
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));