const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let compScore = 0;

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
    ++compScore;
    console.log(compInput + " beats " + choice + " you lose");
  } else {
    ++userScore;
    console.log(choice + " beats " + compInput + " you win");
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    playRound();
  }

  if (userScore > compScore) {
    console.log("You won! Congratulations");
  } else {
    console.log("You lost! Try again");
  }
}

game();
