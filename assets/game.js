var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var usedLetters = [];


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guessesRemaining-text");
var guessedLetters = document.getElementById("usedLetters-text");

document.onkeyup = function(event) {
    
    var userGuess = event.key.toLowerCase();

    var compInput = compChoices[Math.floor(Math.random() * compChoices.length)];
    console.log(compInput);

    // for (var i = 0; i < compChoices.length; i++) {

        if (guessesRemaining > 0) {
                if (userGuess === compInput)  {
                    wins++
                }
                else {
                    losses++
                }
                console.log ("wins ", wins, "losses ", losses)

        };

    

winsText.textContent = wins;
lossesText.textContent = losses; 
guessesLeft.textContent = guessesRemaining;
}