var userScore = 0;
var computerScore = 0;
//caching the dom
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  const player = "user".fontsize(3).sub();
  const computer = "comp".fontsize(3).sub();
  result_p.innerHTML = `${userChoice}${player} beats ${computerChoice}${computer}. You win!`;
  document.getElementById(userChoice).classList.add("greenGlow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("greenGlow");
  }, 1000);
}
function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  const player = "user".fontsize(3).sub();
  const computer = "comp".fontsize(3).sub();
  result_p.innerHTML = `${computerChoice}${computer} beats ${userChoice}${player}. You lose!`;
  document.getElementById(userChoice).classList.add("redGlow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("redGlow");
  }, 1000);
}
function draw(userChoice, computerChoice) {
  const player = "user".fontsize(3).sub();
  const computer = "comp".fontsize(3).sub();
  result_p.innerHTML = `${computerChoice}${computer} equals ${userChoice}${player}. it's a draw!`;
  document.getElementById(userChoice).classList.add("greyGlow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("greyGlow");
  }, 1000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}
function main() {
  rock_div.addEventListener("click", function() {
    game("rock");
  });
  scissors_div.addEventListener("click", function() {
    game("scissors");
  });
  paper_div.addEventListener("click", function() {
    game("paper");
  });
}
main();
