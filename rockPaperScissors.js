//Variable for storage of user selection
var playerSelection = window.prompt ("Rock, paper, or scissors?");

//Function that stores the computer's move
function computerPlay(){;
    //Formula that draws random number between integers 1 and 3
    let choiceNumber = Math.floor(Math.random () * 3);
    //Displays Rock, Paper, or Scissors depending on which integer is chosen at random
    if (choiceNumber == 1) {
        return "Rock";
    } else if (choiceNumber == 2) {
        return "Paper";
    } else { return "Scissors";
    }
       }

//This function takes the computer's selection and player's selection to play a round
function playRound(playerSelection){;
    //Sets a variable equal to the computerPlay function to use the choice made in said variable
    let computerSelection = computerPlay()

    if (playerSelection == computerSelection){
        return "It's a tie!";
    }
    else if ((playerSelection = "Rock" && computerSelection == "Scissors") ||
            (playerSelection = "Paper" && computerSelection == "Rock") ||
            (playerSelection = "Scissors" && computerSelection == "Paper")){
        return "You win!"
    }
    else if ((playerSelection = "Rock" && computerSelection == "Paper") ||
            (playerSelection = "Paper" && computerSelection == "Scissors") ||
            (playerSelection = "Scissors" && computerSelection == "Rock")){
        return "You lose..."
            }
    }

console.log(playRound())