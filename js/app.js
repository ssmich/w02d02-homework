//let totalCardCount = (gameCards.deck.length + gameCards.playerHand.length + gameCards.computerHand.length + gameCards.disCards.length);
//console.log(totalCardCount);

function randomInt(max,min) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function showPlayerHand(){
  if(playerCards.length === 3){
    console.log(`Player cards: 
      ${playerCards[0].name} who causes ${playerCards[0].damagePts} in damage, 
      ${playerCards[1].name} who causes ${playerCards[1].damagePts} in damage, 
      and ${playerCards[2].name} who causes ${playerCards[2].damagePts} in damage`);
  } else if(playerCards.length === 2){
    console.log(`Player cards: 
      ${playerCards[0].name} who causes ${playerCards[0].damagePts} in damage, 
      and ${playerCards[1].name} who causes ${playerCards[1].damagePts} in damage`);
  } else if (playerCards.length === 1){
      console.log(`Player cards: 
      ${playerCards[0].name} who causes ${playerCards[0].damagePts} in damage`);
  } else {
    console.log(`Player has no cards.`);
  }
}

function dealCards() {
  for(let i = 0; i <= 2; i++){
    playerCards[i] = deckCards.splice(randomInt(deckCards.length-1,0),1)[0];
    computerCards[i] = deckCards.splice(randomInt(deckCards.length-1,0),1)[0];
    };
  console.log(`Player and Computer have each been dealt 3 cards at random.`)
  console.log(`Player cards: ${playerCards[0].name} who causes ${playerCards[0].damagePts} in damage, 
    ${playerCards[1].name} who causes ${playerCards[1].damagePts} in damage, 
    and ${playerCards[2].name} who causes ${playerCards[2].damagePts} in damage`);
};

function battle(){
  console.log(`Round ${round} of 3`);
  let playerChoice = prompt("Type the name of the Pokemon chosen for battle.");
  for(let i = 0; i < playerCards.length; i++){
    if(playerChoice == playerCards[i].name){
      battleCards[0] = playerCards.splice(i,1)[0];
    };
  }
  battleCards[1] = computerCards.splice(randomInt(computerCards.length-1,0),1)[0];
  console.log(`Computer chooses ${battleCards[1].name} for battle.`);
  if(battleCards[0].damagePts > battleCards[1].damagePts){
    playerScore++;
    console.log(`Player wins round ${round}.`)
  } else if(battleCards[0].damagePts < battleCards[1].damagePts){
      computerScore++;
      console.log(`Computer wins round ${round}.`);
  } else {
    console.log(`Battle tie, no points awarded.`);
  };
  disCards.push(battleCards[0], battleCards[1]);
  round++;
  scoreReport();
  if(round <= 3){
    showPlayerHand();
    battle();
  };
};

function cardCount(cardPile, name){
  if(cardPile.length === 1){
    console.log("The " + name + " has 1 card.");
  } else {
    console.log(`The ${name} has ${cardPile.length} cards.`);
  };
};


function fullCardCount(){
  cardCount(deckCards, "deck");
  cardCount(playerCards, "player");
  cardCount(computerCards, "computer");
  if(battleCards.length === 2){
    console.log(`The Player has the ${battleCards[0].name} card in play.`);
    console.log(`The Computer has the ${battleCards[1].name} card in play.`);
  } else if(battleCards.length !== 2){
    console.log(`There are no cards in play.`);
  };
  cardCount(disCards, "already-played pile");
};

function scoreReport(){
    console.log(`Player score: ${playerScore}, 
    Computer score: ${computerScore}`);
}

function shuffleDeck(){

}

let deckCards = [
    {
      name: "Bulbasaur",
      damagePts: 60
    }, {
      name: "Caterpie",
      damagePts: 40
    }, {
      name: "Charmander",
      damagePts: 60
    }, {
      name: "Clefairy",
      damagePts: 50
    }, {
      name: "Jigglypuff",
      damagePts: 60
    }, {
      name: "Mankey",
      damagePts: 30
    }, {
      name: "Meowth",
      damagePts: 60
    }, {
      name: "Nidoran - female",
      damagePts: 60
    }, {
      name: "Nidoran - male",
      damagePts: 50
    }, {
      name: "Oddish",
      damagePts: 40
    }, {
      name: "Pidgey",
      damagePts: 50
    }, {
      name: "Pikachu",
      damagePts: 50
    }, {
      name: "Poliwag",
      damagePts: 50
    }, {
      name: "Psyduck",
      damagePts: 60
    }, {
      name: "Rattata",
      damagePts: 30
    }, {
      name: "Squirtle",
      damagePts: 60
    }, {
      name: "Vulpix",
      damagePts: 50
    }, {
      name: "Weedle", 
      damagePts: 40
    }
];
let playerCards = [];
let computerCards = [];
let disCards = [];
let battleCards = [];

let playerScore = 0;
let computerScore = 0;
let round = 1;


dealCards();

battle();


// function cardCount(){
//   console.log(`${deckCards.length}`, "deck",
//   playerCards.length, "player",
//   computerCards.length, "computer",
//   disCards.length,"out-of-play",
//   battleCards.length,"in-play");
// dealCards();

// console.log(deck.length, "deck",
//   playerHand.length, "player",
//   computerHand.length, "computer",
//   disCards.length,"out-of-play",
//   battleCards.length,"in-play");
// console.log(deck);
// console.log(playerHand.length, "player hand");
// console.log(playerHand);
// console.log(computerHand.length, "computerHand");
// console.log(computerHand);

// ## Example Play

// - There are 18 Pokemon cards in the deck
// - Eggbert (the player) is dealt three random cards from the deck
// - The computer is dealt three random cards from the deck
// - Eggbert chooses a card and plays it! It has a damage of 10.
// - The computer randomly chooses a card and plays it! It has a damage of 8.
// - Eggbert wins!