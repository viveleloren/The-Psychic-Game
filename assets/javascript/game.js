var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var ranLetter = ranLetter;
var letters = "qwertyuiopasdfghjklzxcvbnm"

// GENERATING MEWTWO THEME

$(document).ready(function () {

    var mewTwo = $(".mew-two");

    // Gets Link for Theme Song
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "mewtwo.mp3");

    // Theme Button
    $(".theme-button").on("click", function () {
        audioElement.play();
    });
    $(".pause-button").on("click", function () {
        audioElement.pause();
    });

});

//GENERATING THE COMPUTERS SECRET LETTER
ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);

//Uses random whole number generated above to select a random letter from the array [letters] and assigns it to the var ranLetter
function jsGuess() {
    ranLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(ranLetter);

}

//CAPTURING THE PLAYERS INPUT
document.onkeyup = function (event) {
    var playerGuess = event.key;

    //  CORRECT GUESSES
    if (playerGuess === ranLetter) {
        won++;
        attempts = 10;
        usedArray = [];

    }

    // INCORRECT GUESSES
    jsGuess();
    if (playerGuess !== ranLetter) {
        attempts--;

    }

    if (attempts == 0) {
        lost++;
        usedArray = []
        attempts = 10;
    }

    // INCORRECT GUESSES - 
    if (usedArray.indexOf(playerGuess) >= 0) {

    } else {
        usedArray.push(playerGuess);
        document.getElementById('playerGuess').innerHTML = usedArray;
        console.log(usedArray);

    }
    //OUTPUT TO HTML
    document.getElementById('won').innerHTML = won;
    document.getElementById('lost').innerHTML = lost;
    document.getElementById('attempts').innerHTML = attempts;

}