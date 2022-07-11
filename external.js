//Scorecard
let userCount = parseInt(0);
let computerCount = parseInt(0);
//Access to buttons and text within html file
const btn = document.getElementsByClassName('btn');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
    console.log(document.getElementById('paper')!==null)
const scissorsButton = document.getElementById('scissors');
const playerScore = document.getElementsByClassName ('playerScore')[0];
console.log(document.getElementsByClassName('playerScore') !==null)
const computerScore = document.getElementsByClassName('computerScore')[0];
console.log(document.getElementsByClassName('playerScore') !==null)
const result = document.getElementsByClassName('result')[0];
console.log(document.getElementsByClassName('result') !==null)
const reset = document.getElementsByClassName('reset') [0];

//reset button
reset.addEventListener('click', () =>{
    location.reload()
});


//Computer picks random number to pick rock,paper,scissors 
function computerPlay() {
let num= Math.floor(Math.random()*3);
    if (num == 0) {return 'rock';
}
    else if (num == 1) {return 'paper';
}
    else {return 'scissors';
}
}


//button functionality to game
rockButton.addEventListener('click', () => {
    let playerSelection = 'rock';
    let computerChoice = computerPlay()
   console.log(computerChoice);
    playRound(playerSelection,computerChoice);
    console.log('rock button clicked')});
paperButton.addEventListener('click', () =>{
    let playerSelection = 'paper';
    let computerChoice = computerPlay();
    console.log(computerChoice);
    playRound(playerSelection,computerChoice);
    console.log('paper button clicked')});
    scissorsButton.addEventListener('click', () =>{
        let playerSelection = 'scissors';
        let computerChoice = computerPlay();
        console.log(computerChoice);
        playRound(playerSelection,computerChoice);
        console.log('scissors button clicked')
    });
    
    //Result displays in scoreboard
    function playerWin () {
    userCount++;
    playerScore.textContent=('Player Score:' + userCount);
    }
    function computerWin() {
    computerCount++;
    computerScore.textContent=('Computer score:' + computerCount);
    }
//Function to determine winner
function playRound (playerSelection, computerChoice) {
    if (playerSelection == computerChoice) {
        result.textContent='It\'s a Tie!'; //return 'Its a Tie!'
    }
    else if (playerSelection == 'rock') {
        if (computerChoice == 'paper') {
            computerWin ();
            result.textContent='Result: You Lose! Paper Beats Rock'; //return 'You Lose! Paper Beats Rock';
        }
        else {
            playerWin();
            result.textContent='Result: You Win! Rock Beats Scissors';
        }
    }
    else if (playerSelection == 'paper') {
        if (computerChoice == 'scissors') {
            computerWin ()
            //computerCount++;
            result.textContent='Result: You Lose! Scissors beats Paper';
        }
        else {
            playerWin();
            //userCount++;
            result.textContent='Result: You Win! Paper beats Rock';
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerChoice == 'rock') {
            computerWin ()
            //computerCount++;
            result.textContent='Result: You Lose! Rock beats Scissors';
        }
        else {
            playerWin();
            //userCount++;
            result.textContent='Result: You Win! Scissorts beats Paper';
        }
    }
    if (userCount >= 5) {
        result.textContent = 'Game Over: Player Wins!';
    } 
    if (computerCount >= 5) {
        result.textContent = 'Game Over: Computer Wins!';
    }else {
        null
     }
    
}

//Game Over
function game () {
 

//Player prompt for Rock,Paper, Scissors

//let playerSelection = prompt ('Rock, Paper, or Scissors?').toLowerCase(); 



    }
console.log (game())