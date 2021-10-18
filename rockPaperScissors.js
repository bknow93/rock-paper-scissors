
function computerPlay(computerChoice){;
    let choiceNumber = Math.floor(Math.random () * 3);
    if (choiceNumber == 1) {
        return "Rock";
    } else if (choiceNumber == 2) {
        return "Paper";
    } else { return "Scissors";
    }
        }

console.log(computerPlay())