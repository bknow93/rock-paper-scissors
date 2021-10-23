//Function that stores the computer's move
function computerPlay(){;
    //Formula that draws random number between integers 1 and 3
    let choiceNumber = Math.floor(Math.random () * 3);
    //Displays rock, paper, or scissors depending on which integer is chosen at random
    if (choiceNumber == 1) {
        return "rock";
    } else if (choiceNumber == 2) {
        return "paper";
    } else { return "scissors";
    }
       }

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection){
        return "It's a tie!";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")){
        return "You win!"
    }
    else if ((playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock")){
        return "You lose..."
            }
    }
      
const playerSelection = "rock".toLowerCase();
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
