function computerPlay(){
    let choices = ["rock","paper","scissors"];
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection){
         return "Tie!";
        }
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")){
                 return "You win this round!";
        }
    else if ((playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock")){
                 return "You lose this round...";
        }
    }    

const playerSelection = prompt("Rock, paper, or scissors?")
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));