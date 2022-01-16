let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let choices = ["rock","paper","scissors"];
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function playRound(computerSelection){
    let playerSelection = prompt("Rock, paper, or scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection;
    if (playerSelection == computerSelection){
         console.log("Tie!");
        }
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")){
                ++playerScore;
                 console.log("You win this round!");
        }
    else if ((playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock")){
                ++computerScore;
                console.log("You lose this round...");
        }
    }    

const computerSelection = computerPlay();

//Play five rounds, but always returns the same computerSelection choice.
function playGame(){
        console.log(playRound(computerSelection));
        console.log(playerScore);
        console.log(computerScore);
    if (playerScore >= 5){
        console.log("You won!");
        }
    else if (computerScore >= 5){
        console.log("You lose...");
        }
}

playGame();
playGame();
playGame();
playGame();
playGame(); 