var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);
cardsInPlay;

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);
cardsInPlay;

if (cardsInPlay.length === 2) {
 if (cardsInPlay[0] === cardsInPlay[1]) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}
}