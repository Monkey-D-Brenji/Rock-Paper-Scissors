const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let compScore = 0;

const btn = document.querySelectorAll("input");
btn.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value);
  });
});

function disableButtons() {
  btn.forEach((elem) => {
    elem.disabled = true;
  });
}

const div = document.createElement("div");
document.body.appendChild(div);

const divTwo = document.createElement("div");
document.body.appendChild(divTwo);

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(choice) {
  let comp = computerPlay();
  let result = "";
  let finalScore = "";

  if (
    (choice === "rock" && comp === "scissors") ||
    (choice === "paper" && comp === "rock") ||
    (choice === "scissors" && comp === "paper")
  ) {
    result = choice + " beats " + comp + " you win!";
    userScore += 1;
  } else if (
    (choice === "rock" && comp === "paper") ||
    (choice === "paper" && comp === "scissors") ||
    (choice === "scissors" && comp === "rock")
  ) {
    result = comp + " beats " + choice + " you lose!";
    compScore += 1;
  } else {
    result = "tie!";
  }

  if (userScore === 3) {
    finalScore = "Congrats You Win!";
    disableButtons();
  } else if (compScore === 3) {
    finalScore = "You Lose! Try again";
    disableButtons();
  }

  div.textContent = result;
  divTwo.textContent = finalScore;
  return;
}

console.log(btn);
