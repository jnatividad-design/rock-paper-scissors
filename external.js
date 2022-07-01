
//Computer picks random number to pick rock,paper,scissors 
let computerChoice = Math.floor(Math.random()*3);
if ((computerChoice) == 0) {computerChoice=('Rock');
}
else if ((computerChoice) == 1) {computerChoice=('Paper');
}
else {computerChoice =('Scissors');
}

console.log (computerChoice)

//Player selects between rock, paper, scissors
let playerSelection= prompt ('Rock, Paper, or Scissors?');
