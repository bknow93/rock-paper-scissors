let playerScore = 0
let computerScore = 0

function computerPlay(){
    let choices = ["rock","paper","scissors"];
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection){
         return "Tie!"
        }
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")){
                ++playerScore;
                 return "You win this round!"
        }
    else if ((playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock")){
                ++computerScore;
                return "You lose this round..."
        }
    }    

let playerSelection = prompt("Rock, paper, or scissors?");
const computerSelection = computerPlay();

function playGame(oneRound){
    if (playerScore < 5 || computerScore < 5){
        playRound(playerSelection, computerSelection);
    }
    else if (playerScore >= 5){
        return "You won!";
    }
    else if (computerScore >= 5){
        return "You lose...";
    }
}

console.log(playGame());