
//Function to determine winner
function playRound (playerSelection, computerChoice) {
    if (playerSelection == computerChoice) {
        return "Its a Tie!"
    }
    if (playerSelection == "rock") {
        if (computerChoice == "paper") {
            computerCount++;
            return "You Lose! Paper Beats Rock";
        }
        else {
            userCount++;
            return "You Win! Rock Beats Scissors"
        }
    }
    if (playerSelection == "paper") {
        if (computerChoice == "scissors") {
            computerCount++;
            return "You Lose! Scissors beats Paper"
        }
        else {
            userCount++;
            return "You Win! Paper beats Rock"
        }
    }
    if (playerSelection == "scissors") {
        if (computerChoice == "rock") {
            computerCount++;
            return "You Lose! Rock beats Scissors"
        }
        else {
            userCount++;
            return "You Win! Scissorts beats Paper"
        }
    }
}

//Loop to have rounds in the game 
let userCount = parseInt(0);
let computerCount = parseInt(0);
function game () {
   

//Player prompt for Rock,Paper, Scissors
//let playerSelection = prompt ('Rock, Paper, or Scissors?').toLowerCase(); 

//Computer picks random number to pick rock,paper,scissors 
let computerChoice = Math.floor(Math.random()*3);
    if ((computerChoice) == 0) {computerChoice=('rock');
}
    else if ((computerChoice) == 1) {computerChoice=('paper');
}
    else {computerChoice =('scissors');
}

//Console displays
    console.log (playRound(playerSelection, computerChoice));
    console.log ("your score =" + userCount);
    console.log ("Computer's score =" + computerCount);
    }
console.log (game())