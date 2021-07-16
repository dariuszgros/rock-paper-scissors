const elementButton = document.querySelectorAll(".element-button");
const combatText = document.querySelector(".combat-text");
const roundsUpdate = document.querySelector(".round");
const buttonReload = document.querySelector(".reload");

function game() {
  let round = 0;
  let playerScore = 5;
  let computerScore = 5;

  while (playerScore > 0 && computerScore > 0) {
    playRound(playerPlay(), computerPlay());
    roundsUpdate.innerHTML = `Round: ${round}`;
    round++;
  }

  getScore();

  function playerPlay() {
    let playerSelection = prompt("fire | water | grass").toLowerCase();
    if (
      playerSelection == "fire" ||
      playerSelection == "water" ||
      playerSelection == "grass"
    ) {
      console.log(`You choose ${playerSelection}.`);
      return playerSelection;
    }
    console.log(
      `Your choice is wrong. As an elemental mage you cannot simply say ${playerSelection} and expect explosions...`
    );
    console.log("Try using just fire, water, grass...");
  }

  function computerPlay() {
    const elements = ["fire", "water", "grass"];
    computerSelection = elements[~~(Math.random() * elements.length)];

    const computerIcon = document.querySelector(".computer-icon");
    computerIcon.classList.remove(
      "idleIcon",
      "fireIcon",
      "waterIcon",
      "grassIcon"
    );
    if (computerSelection == "") {
      computerIcon.classList.add("fireIcon");
      computerIcon.style.color = "rgb(255, 94, 0)";
    }
    if (computerSelection == "") {
      computerIcon.classList.add("waterIcon");
      computerIcon.style.color = "#12bafc";
    }
    if (computerSelection == "") {
      computerIcon.classList.add("grassIcon");
      computerIcon.style.color = "rgb(42, 185, 37)";
    }
    return computerSelection;
  }

  function playRound(playerSelection, computerSelection) {
    const gameOutput = document.querySelector(".game-results");
    const computerActions = document.querySelector(".computer-actions");
    
    switch (true) {
      // computer wins
      case playerSelection == "fire" && computerSelection == "water":
      case playerSelection == "grass" && computerSelection == "fire":
      case playerSelection == "water" && computerSelection == "grass":
        playerScore--;
        //playerScore -= playerScore;
        console.log(`Your enemy uses ${computerSelection}`);
        console.log(
          `You lost! Your ${playerSelection} is weak against enemy's ${computerSelection}.`
        );
        console.log(
          `You've got ${playerScore} more lives | Computer has ${computerScore} more lives`
        );
        return playerScore;

      // player wins
      case playerSelection == "water" && computerSelection == "fire":
      case playerSelection == "grass" && computerSelection == "water":
      case playerSelection == "fire" && computerSelection == "grass":
        computerScore--;
        //computerScore -= computerScore;
        console.log(`Your enemy uses ${computerSelection}`);
        console.log(
          `You win! Your ${playerSelection} is natural counter for enemy's ${computerSelection}.`
        );
        console.log(
          `You've got ${playerScore} more lives | Computer has ${computerScore} more lives`
        );
        return computerScore;

      // a tie
      case playerSelection == computerSelection:
        // playerScore = playerScore;
        
        
        console.log(`Your enemy uses ${computerSelection}`);
        console.log(`A tie, both elements neutralise themselves.`);
        console.log(
          `You've got ${playerScore} more lives | Computer has ${computerScore} more lives`
        );
        break;
    }
    return [playerScore, computerScore];
  }

  function getScore() {
    let result;
    console.log("Time to announce results...");
    console.log(`You - ${playerScore} vs ${computerScore} - Enemy`);
    if (playerScore > computerScore) {
      result = console.log("You win!");
    } else {
      result = console.log("You lost...");
    }
    return result;
  }
  return;
}

game();
