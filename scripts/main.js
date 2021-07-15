let playerScore = 5;
let computerScore = 5;

function playerPlay() {
  let playerSelection = prompt("fire | water | grass").toLowerCase();
  if (
    playerSelection == "fire" ||
    playerSelection == "water" ||
    playerSelection == "grass"
  ) {
    console.log(`Your choice is ${playerSelection}.`);
    return playerSelection;
  }
  console.log(
    `YOU CAN'T TYPE ${playerSelection}.VALID WORDS ARE  FIRE | WATER | GRASS`
  );
  console.log(
    "You made a failure... but why? You had to use just fire, water, grass... geez...",
    "color: #ef8513"
  );
}

function computerPlay() {
  const elements = ["fire", "water", "grass"];
  computerSelection = elements[~~(Math.random() * elements.length)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
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
      playerScore = playerScore;
      console.log(`Your enemy uses ${computerSelection}`);
      console.log(`A tie, both elements neutralise themselves.`);
      console.log(
        `You've got ${playerScore} more lives | Computer has ${computerScore} more lives`
      );
      break;
  }
  return [playerScore, computerScore];
}

playRound(playerPlay(), computerPlay());
