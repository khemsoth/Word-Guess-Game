// Declare variables
var words = ["threat level midnight", "stanley is having an affair", "suck-it", "scotts tots", "koi pond", "the dundies",
             "dinner party", "tan all over, jan all over", "kevin and the zits", "kevins famous chili", "electric city", "fire drill"];
var wins = 0;
var guesses = [];
var guessWord = [];
var guessesRemain = 12;
var randomWord = words[Math.floor(Math.random()*words.length)];
// Press any key to get started

    document.addEventListener("keydown", function(event) {

})

// Display as _ _ _
function genWord() {
for (var i = 0; i < randomWord.length; i++) {
    guessWord[i] = "_";
    document.getElementById("word").innerHTML = "_";
    console.log(guessWord);
}};
// User guess one letter at a time
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);
};
// Display guess in either word or already guessed bank
if (userGuess === guessWord[i]) {

}
 //Alter guesses remaining 
else if (userGuess !== guessWord[i]) {
    guessesRemain--;
    document.getElementById("guesses-remain").innerHTML = "Number of Guesses Remaining: " + guessesRemain;
    guesses.push(" " + userGuess);
    document.getElementById("guesses").innerHTML = "Letters Already Guessed: " + guesses;
};

