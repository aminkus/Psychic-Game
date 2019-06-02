var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var guessedLetters = [];


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guessesRemaining-text");
var usedLetters = document.getElementById("guessedLetters-text");


document.onkeyup = function(event) {
    console.log(event)
    
    var userGuess = event.key.toLowerCase();
    guessedLetters.push(userGuess);

    var compInput = compChoices[Math.floor(Math.random() * compChoices.length)];

    if (userGuess === compInput)  {
        wins++;
        alert("You Win!");
        guessesRemaining = 10;
        } else {
            guessesRemaining--;
        }
    if (guessesRemaining === 0) {
        losses++;
        alert("You lose");
        guessesRemaining = 10;
        }

                

winsText.textContent= "Wins: " + wins;
lossesText.textContent = "Losses: " + losses; 
usedLetters.textContent = "Guessed Letters: " + guessedLetters.join(", ");
guessesLeft.textContent = "Guesses Remaining: " + guessesRemaining;

}