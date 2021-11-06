let playerScore = 0;
let computerScore = 0;

//Function that stores the computer's move
function computerPlay(){;
    //Formula that draws random number between integers 1 and 3
    let choiceNumber = Math.floor(Math.random () * 3);
    //Displays rock, paper, or scissors depending on which integer is chosen at random
    if (choiceNumber = 1) {
        return "rock";
        } 
    else if (choiceNumber = 2) {
        return "paper";
        } 
    else { return "scissors";
        }
    }

//Plays one round of the game. Used to make all comparison's to dictate the victor of a round.
function playRound(playerSelection, computerSelection) {

    //Makes comparison that creates tie.
    if (playerSelection === computerSelection){
        playerScore++ && computerScore++;
         console.log("Tie!");
        }
    //Makes comparison's that win for player.
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")){
                playerScore++;
                 console.log("You win this round!");
        }
    //Makes comparison's that lose for player.
    else if ((playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")){
                computerScore++;
                 console.log("You lose this round...");
        }
    }
      
let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
const computerSelection = computerPlay();



console.log(playRound())
console.log(playerScore)
console.log(computerScore)