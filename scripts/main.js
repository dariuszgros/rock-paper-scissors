function playerPlay() {
  let playerSelection = prompt('fire | water | grass').toLowerCase();
  if (
    playerSelection == 'fire' ||
    playerSelection == 'water' ||
    playerSelection == 'grass'
  ) {
    console.log(`Your choice is ${playerSelection}.`);
    return playerSelection;
  }
  console.log(
    `YOU CAN'T TYPE ${playerSelection}.VALID WORDS ARE  FIRE | WATER | GRASS`
  );
  console.log(
    'You made a failure... but why? You had to use just fire, water, grass... geez...',
    'color: #ef8513'
  );
}
