function getComputerChoice(){
  let choiceArray = ["Rock", "Paper", "Scissors"]

  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}