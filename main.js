const choice = ["rock", "paper", "scissors"];

// play round function

// player choice function
function playerChoice() {
  let userChoice = prompt("Choose Rock, Paper, or Scissors");
  userChoice = userChoice.toLowerCase();
  return userChoice;
}

// computer choice function
function computerChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}

// game function
