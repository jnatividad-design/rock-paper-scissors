//Scorecard
let userCount = parseInt(0);
let computerCount = parseInt(0);
//Access to buttons and text within html file
const btn = document.getElementsByClassName('btn');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById("paper");
    console.log(document.getElementById('paper')!==null)
const scissorsButton = document.getElementById("scissors");
const playerScore = document.getElementsByClassName ("playerScore")[0];
console.log(document.getElementsByClassName("playerScore") !==null)
const computerScore = document.getElementsByClassName("computerScore")[0];
const result = document.getElementsByClassName("result")[0];

//Computer picks random number to pick rock,paper,scissors 
let computerChoice = Math.floor(Math.random()*3);
    if ((computerChoice) == 0) {computerChoice=('rock');
}
    else if ((computerChoice) == 1) {computerChoice=('paper');
}
    else {computerChoice =('scissors');
}
//button functionality to game
rockButton.addEventListener("click", () => {
    let playerSelection = "rock";
    playRound(playerSelection,computerChoice);
    console.log('rock button clicked')});
paperButton.addEventListener("click", () =>{
    let playerSelection = "paper";
    playRound(playerSelection,computerChoice);
    console.log('paper button clicked')});
scissorsButton.addEventListener("click", () =>{
    let playerSelection = "scissors";
    playRound(playerSelection,computerChoice);
    console.log('scissors button clicked')
});

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

function game () {
   

//Player prompt for Rock,Paper, Scissors

//let playerSelection = prompt ('Rock, Paper, or Scissors?').toLowerCase(); 

//Result Displays 

//Console displays
    console.log (playRound(playerSelection, computerChoice));
    console.log ("your score =" + userCount);
    console.log ("Computer's score =" + computerCount);
    }
console.log (game())