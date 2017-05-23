(function() {

    // Creating the word Choices Array

    var wordList = ["Water", "Tea", "Coke", "Beer", "Juice", "Whisky", "Milk", "Kombucha", "Pepsi", ];

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

    //setting up the object.

    var self = {

        updateWins: function() {
            playerWins.innerHTML = wins;

        },
        updateLoses: function() {
            playerLoses.innerHTML = loses;

        },
        updateGuess: function() {
            numberOfGuesses = 10;
        },
        updateMarks: function() {
            dash = "";
            console.log(dash)
            for (i = 0; i < wordChoice.length; i++) {
                dash += "-";
                dashMarks.innerHTML = dash;
                console.log(dashMarks);
            }
        },
        wordRandom: function() {
            wordRandom = Math.floor(Math.random() * wordList.length);
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
            for (i = 0; i < wordLength; i++) {
                if (wordChoice.charAt(i) === letter) {
                    console.log("im the letter", letter);
                    placeHolders[i] = letter;
                    console.log("complete", letter);
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
                numberOfGuesses--;
                if (numberOfGuesses === 0) {
                    loses++;
                    self.updateGuess();
                }
                playerLoses.innerHTML = loses;
                playerPicks.innerHTML = numberOfGuesses;
                playerWins.innerHTML = wins;
            }
            dashMarks.innerHTML = placeHolders.join("");
            if (placeHolders.join("") === wordChoice) {
                wins++;
                self.updateWins();
                self.updateGuess();
                self.wordRandom();
                self.updateMarks();
            }
        }
    }

    document.addEventListener("DOMContentLoaded", function() {

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
    document.addEventListener("keydown", function(event) {
        self.checkGuess(event.key)
    })




}());
