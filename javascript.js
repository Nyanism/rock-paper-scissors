function getComputerChoice() {
  let choiceArray = ["Rock", "Paper", "Scissors"];

  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a draw!";
  }

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      return "You Win! Rock beats Scissors";
    } else {
      computerScore++;
      return "You Lose! Paper beats Rock";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      playerScore++;
      return "You Win! Scissors beats Paper";
    } else {
      computerScore++;
      return "You Lose! Rock beats Scissors";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return "You Win! Paper beats Rock";
    } else {
      computerScore++;
      return "You Lose! Scissors beats Paper";
    }
  }
}

function game() {}

function updateScore() {
  if(playerScore === 0 && computerScore === 1) {
    document.querySelector(".winner").textContent = "";
  } else if (playerScore === 1 && computerScore === 0) {
    document.querySelector(".winner").textContent = "";
  }
  document.querySelector(".playerScore").textContent = `Player Score: ${playerScore}`;
  document.querySelector(".computerScore").textContent = `Computer Score: ${computerScore}`;
  if(playerScore === 5) {
    document.querySelector(".winner").textContent = "Congratulations! The player wins!";
    playerScore = 0;
    computerScore = 0
  } else if (computerScore === 5) {
    document.querySelector(".winner").textContent = "Congratulations! The computer wins!";
    playerScore = 0;
    computerScore = 0;
  }
}

let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", () => {
  document.querySelector(".result").textContent = playRound(
    "rock",
    getComputerChoice()
  );
  updateScore();
});

const paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", () => {
  document.querySelector(".result").textContent = playRound(
    "paper",
    getComputerChoice()
  );
  updateScore();
});

const scissorsBtn = document.querySelector(".scissors");
scissorsBtn.addEventListener("click", () => {
  document.querySelector(".result").textContent = playRound(
    "scissors",
    getComputerChoice()
  );
  updateScore();
});


