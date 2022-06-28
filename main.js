const choice = ["rock", "paper", "scissors"];

// play round function
function playRound() {
  let userChoice = playerChoice();
  let compChoice = computerChoice();
  if (userChoice === compChoice) {
    console.log("Tie");
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    console.log("You Win!");
  } else if (
    (userChoice === "rock" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "scissors") ||
    (userChoice === "scissors" && compChoice === "rock")
  ) {
    console.log("You Lose!");
  }
}

// player choice function
function playerChoice() {
  let userChoice = prompt("Choose Rock, Paper, or Scissors");
  userChoice = userChoice.toLowerCase();
  return userChoice;
}

// computer choice function
function computerChoice() {
  let compChoice = choice[Math.floor(Math.random() * choice.length)];
  return compChoice;
}

// game function

playRound();
