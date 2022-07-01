
//Computer picks random number to pick rock,paper,scissors 
let computerChoice = Math.floor(Math.random()*3);
if ((computerChoice) == 0) {computerChoice=('rock');
}
else if ((computerChoice) == 1) {computerChoice=('paper');
}
else {computerChoice =('scissors');
}

console.log (computerChoice)

//Player selects between rock, paper, scissors
let playerSelection= prompt ('Rock, Paper, or Scissors?').toLowerCase(); 

if ((playerSelection) !== 'rock' || 'paper' || 'scissors'); {
    prompt ("Incorrect Input! Try again (Rock,Paper, or Scissors)")
}
