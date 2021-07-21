const elementButton = document.querySelectorAll(".element-button");
const combatText = document.querySelector(".combat-text");
const roundsUpdate = document.querySelector(".round");
const buttonReload = document.querySelector(".reload");

let round = 0;
let playerScore = 5;
let computerScore = 5;

function roundsCounter() {
  round += 1;
  round.textContent = `Round: ${round}`;
  return round;
}

function gameReset() {
  buttonReload.addEventListener("click", () => {
    window.location.reload();
  });
}

function playRound(playerSelection, computerSelection) {
  const gameOutput = document.querySelector(".game-results");
  const computerActions = document.querySelector(".computer-actions");

  switch (true) {
    // player loses
    case playerSelection == "fire" && computerSelection == "water":
    case playerSelection == "grass" && computerSelection == "fire":
    case playerSelection == "water" && computerSelection == "grass":
      playerScore--;
      combatText.textContent = `That hurts! Your ${playerSelection} lost against enemy's ${computerSelection}.`;
      break;
    // player wins
    case playerSelection == "water" && computerSelection == "fire":
    case playerSelection == "grass" && computerSelection == "water":
    case playerSelection == "fire" && computerSelection == "grass":
      computerScore--;
      combatText.textContent = `A splendid move! Your ${playerSelection} completly destroys enemy's ${computerSelection}!`;
      break;
    default:
      // a tie
      combatText.textContent = `Both of you use ${playerSelection} and both attacks neutralise themselves. That means a tie!`;
      break;
  }

  const lives = document.querySelector(".lives");
  lives.textContent = `Your hp: ${playerScore} | Enemy's hp: ${computerScore}`;
  return [playerScore, computerScore];
}

function computerPlay() {
  const elements = ["fire", "water", "grass"];
  computerSelection = elements[~~(Math.random() * elements.length)];
  const computerIcon = document.querySelector(".computer-icon");

  computerIcon.classList.remove(
    "fa-hat-wizard",
    "fa-gripfire",
    "fa-tint",
    "fa-leaf"
  );
  if (computerSelection == "fire") {
    computerIcon.classList.add("fa-gripfire");
    computerIcon.style.color = "rgb(255, 94, 0)";
  }
  if (computerSelection == "water") {
    computerIcon.classList.add("fa-tint");
    computerIcon.style.color = "#12bafc";
  }
  if (computerSelection == "leaf") {
    computerIcon.classList.add("fa-leaf");
    computerIcon.style.color = "rgb(42, 185, 37)";
  }
  return computerSelection;
}

function gameEnd(playerScore, computerScore) {
  if (playerScore == 0 || computerScore == 0) {
    elementButton.forEach((button) => {
      button.setAttribute("disabled", "");
      button.classList.add("disabled-button", "opacity");
    });

    const idleIcon = document.querySelector(".computer-icon");
    computerIcon.style.opacity = "0.4";

    const gameEndText = document.querySelector(".game-over-text");
    if (playerScore > computerScore) {
      combatText.textContent = "You win!";
    } else {
      combatText.textContent = "You lost this battle...";
    }
    buttonReload.style.visibility = "visible";
  }
}

function gamePlay() {
  let playerSelection;
  elementButton.forEach((element) => {
    element.addEventListener("click", () => {
      const elementIcon = document.querySelectorAll(".element-icon");
      if (element.classList.contains("fire-button")) {
        elementIcon[0].style.color = "rgb(255, 94, 0)";
        elementIcon[1].style.color = "#5e5e5e";
        elementIcon[2].style.color = "#5e5e5e";
        playerSelection = "fire";
      } else if (element.classList.contains("water-button")) {
        elementIcon[0].style.color = "#12bafc";
        elementIcon[1].style.color = "#5e5e5e";
        elementIcon[2].style.color = "#5e5e5e";
        playerSelection = "water";
      } else if (element.classList.contains("grass-button")) {
        elementIcon[0].style.color = "#12bafc";
        elementIcon[1].style.color = "#5e5e5e";
        elementIcon[2].style.color = "#5e5e5e";
        playerSelection = "grass";
      }
      roundsCounter();
      playRound(playerSelection, computerPlay());
      gameEnd(playerScore, computerScore);
      gameReset();
    });
  });
}

gamePlay();
