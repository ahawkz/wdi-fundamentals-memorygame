var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

/*var cardOne = cards[0];
cardsInPlay.push(cardOne);
cardsInPlay;*/

/*var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
cardsInPlay;*/

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log(cardId);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	//cardsInPlay.push(cards[cardId].card);	
if (cardsInPlay.length === 2) {
	checkForMatch();
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}
}
};

/*flipCard(0);
flipCard(2);*/


var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};

createBoard();

