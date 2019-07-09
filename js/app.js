//let totalCardCount = (gameCards.deck.length + gameCards.playerHand.length + gameCards.computerHand.length + gameCards.disCards.length);
//console.log(totalCardCount);

function randomInt(max,min) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function dealCards() {
  for(let i = 0; i <= 2; i++){
    playerHand[i] = deck.splice(randomInt(deck.length,0),1);
    computerHand[i] = deck.splice(randomInt(deck.length,0),1);
    };
  console.log(`Player and Computer have each been dealt 3 cards at random.`)
  return console.log();
};

function playerChooses(){

}

class gameCards{
  constructor(name, damagePts){
    this.name = name;
    this.damagePts = damagePts;
  }
}

let deck = new gameCards[
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
]

let playerHand = new gameCards;
let computerHand = new gameCards;
let disCards = new gameCards;
let battleCards = new gameCards;

dealCards();

console.log(deck.length, "deck");
console.log(deck);
console.log(playerHand.length, "player hand");
console.log(playerHand);
console.log(computerHand.length, "computerHand");
console.log(computerHand);

// ## Example Play

// - There are 18 Pokemon cards in the deck
// - Eggbert (the player) is dealt three random cards from the deck
// - The computer is dealt three random cards from the deck
// - Eggbert chooses a card and plays it! It has a damage of 10.
// - The computer randomly chooses a card and plays it! It has a damage of 8.
// - Eggbert wins!