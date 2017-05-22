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
var dolose;
var wordRandom;
var updateMarks;


// Random Word Choices

	var self = {

	updateWins: function() {
		// wins;
	},
	updateLoses: function() {
		// loses;
	},
	updateGuess: function() {
		numberOfGuesses;

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
				console.log("complete", letter);
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
  				  if (numberOfGuesses == 0) {

  				  	loses++; 				
  				  }

  				  playerLoses.innerHTML = loses;
  				  playerPicks.innerHTML = numberOfGuesses;
  				  playerWins.innerHTML = wins;

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
	

	playerLoses = document.getElementById("loses");
	self.updateLoses() 

})
document.addEventListener("keydown", function(event){
	self.checkGuess(event.key)
})




}());





	













