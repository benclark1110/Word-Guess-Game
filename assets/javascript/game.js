var movies = ["pulp fiction", "django unchained", "the avengers", "the hateful eight", "shaft"];

var randomMovie = movies[Math.floor(Math.random() * movies.length)];
console.log(randomMovie);

document.onkeyup = function(event) {

    //Setting original Value to False.
    letterPresent = false;
    missedLetters = []

    for (i = 0; i < randomMovie.length; i++){
        if (randomMovie.includes(event.key)){
            letterPresent = true;
            console.log(letterPresent);
            //Will need to add code to call a function to show that letter
        }
        
        else if (!letterPresent && !missedLetters.includes(event.key)) {
            missedLetters.push(event.key);
            console.log(missedLetters);
        }
    }

    var lettersAlreadyGuessedInput = document.getElementById("lettersAlreadyGuessed");

    lettersAlreadyGuessedInput.textContent = missedLetters;

}