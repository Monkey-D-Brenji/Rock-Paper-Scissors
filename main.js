const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function userPlay() {
  let choice = prompt("Pick Rock, Paper, or Scissors");
  choice = choice.toLowerCase();
  return choice;
}

function playRound() {
  let compInput = computerPlay();
  let choice = userPlay();

  if (choice === compInput) {
    console.log("tie");
  } else if (
    (compInput === "rock" && choice === "scissors") ||
    (compInput === "paper" && choice === "rock") ||
    (compInput === "scissors" && choice === "paper")
  ) {
    console.log(compInput + " beats " + choice + " you lose");
  } else {
    console.log(choice + " beats " + compInput + " you win");
  }
}
