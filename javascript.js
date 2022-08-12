function getComputerChoice(){
  let choiceArray = ["Rock", "Paper", "Scissors"]

  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  
  if(playerSelection === computerSelection) {
    return "It's a draw!";
  }

  if(playerSelection === "rock") {
    if(computerSelection === "scissors"){
      return "You Win! Rock beats Scissors";
    } else {
      return "You Lose! Paper beats Rock";
    }
  } 

  if(playerSelection === "scissors") {
    if(computerSelection === "paper"){
      return "You Win! Scissors beats Paper";
    } else {
      return "You Lose! Rock beats Scissors";
    }
  } 

  if(playerSelection === "paper") {
    if(computerSelection === "rock"){
      return "You Win! Paper beats Rock";
    } else {
      return "You Lose! Scissors beats Paper";
    }
  } 
}

function game() {
  for(let ii=0; ii<5; ii++){
    let playerSelection = prompt("Please choose either rock, paper or scissors:");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}