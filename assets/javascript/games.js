(function(){

// Creating the word Choices Array

var wordList = ["Water","Tea","Coke","Beer","Juice","Whisky","Milk","Kombucha","Pepsi",];

// declaring variables

var wins = 0;
var loses = 0;
var numberOfGuesses = 10;
var lettersGuessed = []
var playerTurns;
var placeHolders;
var playerLoses;
var playerWins;
var dashMarks;
var playerPicks;
var playerGuess;
var wordChoice;
var dash;


// Random Word Choices

	var self = {
	updateWins: function() {
		playerWins.innerHTML = wins;
	},
	updateGuess: function() {
		numberOfGuesses
	},
	updateMarks: function() {
		dash = "";
		console.log(dash)
		for (i = 0; i < wordChoice.length; i++) {
			dash+="-";
			dashMarks.innerHTML = dash;
			console.log(dashMarks);
		}
	},
	wordRandom: function(){
		var wordRandom = Math.floor(Math.random()*wordList.length);
		wordChoice = wordList[wordRandom].toLowerCase();
		console.log(wordChoice);
	},
	checkGuess: function(letter) {
		placeHolders = dashMarks.innerHTML;
		wordLength = wordChoice.length;
		wrongGuess = true;
		console.log(placeHolders);
		placeHolders = placeHolders.split("");
		console.log(placeHolders.split);
		console.log(placeHolders);
		for (i=0; i< wordLength; i++) {
			if (wordChoice.charAt(i)=== letter) {
				console.log("im the letter",letter);
				placeHolders[i] = letter;
				wins++;
				console.log(wins);
				wrongGuess = false;				
			}
		}
			if (wrongGuess) {
				console.log(playerGuess);
				  var newDiv = document.createElement("div");
				  console.log(newDiv);
  				  newDiv.innerHTML = letter;
  				  playerGuess.appendChild(newDiv);
  				  numberOfGuesses-=1;
  				  playerPicks.innerHTML = numberOfGuesses;
			}
		dashMarks.innerHTML = placeHolders.join("");




	}


}


document.addEventListener("DOMContentLoaded", function(){

	self.wordRandom()


	playerGuess = document.getElementById("userGuess");
	self.updateGuess()

	playerPicks = document.getElementById("picksLeft");
	playerPicks.innerHTML = numberOfGuesses;

	dashMarks = document.getElementById("placeHolder");
	self.updateMarks()

	playerWins = document.getElementById("wins");
	self.updateWins()
	

	var playerLoses = document.getElementById("loses");
	playerLoses.innerHTML = "Loses will show here";


})
document.addEventListener("keydown", function(event){
	self.checkGuess(event.key)
})




}());





	













