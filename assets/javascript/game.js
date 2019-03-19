//Add Document Ready here

//Set of movies
var movies = ["pulpfiction", "djangounchained", "theavengers", "thehatefuleight", "shaft"];
//Randomly select movie from above
var randomMovie = movies[Math.floor(Math.random() * movies.length)];
//Array to hold answer characters
var answerArray = [];
console.log(randomMovie);
//Array to hold incorrect guesses
var missedLetters = [];
//Array to hold correct Guesses
var correctLetters = [];
//Setting Losses to 0
var losses = 0;
//Setting Wins to 0
var wins = 0;
//Setting Remaining Guesses
var numberOfGuessesRemaining = 6;

    function callMovie(){
        for (i = 0; i < randomMovie.length; i++) {
            answerArray[i] = "_";
            console.log(answerArray)
        } // can this go below?
    }

        document.onkeyup = function(event) {

            //Setting original Value to False.
            letterPresent = false;

            //Checking letters from movie for a matching letter            
            for (i = 0; i < randomMovie.length; i++) {
                if (randomMovie[i] === event.key) {
                    letterPresent = true;
                    console.log(letterPresent);
                    answerArray[i] = event.key;
                }
            }

            //Adding to correctLetters Array if it isnt already there
            if (letterPresent && !correctLetters.includes(event.key)) {
                correctLetters.push(event.key);
                console.log(correctLetters);
            }

            //Adding to missedLetters Array if it isnt already there
            if (!letterPresent && !missedLetters.includes(event.key)) {
                missedLetters.push(event.key);
                console.log(missedLetters);
                numberOfGuessesRemaining--;
            }

            //Checking for number of misses to track a loss
            if (missedLetters.length >= 6) {
                losses++;
                reset();
            }

            //Checking for number of correct guesses to track a win
            if (answerArray.includes("_") === false) {
                wins++;
                reset();
                //Need to call funtion to set everything back to null and call for another random movie
            }

            //Reset Function
            function reset (){
                answerArray = [];
                missedLetters = [];
                correctLetters = [];
                randomMovie = movies[Math.floor(Math.random() * movies.length)];
                console.log(randomMovie)
                letterPresent = false;
                numberOfGuessesRemaining = 6;
                callMovie();
            }

            var lettersAlreadyGuessedInput = document.getElementById("lettersAlreadyGuessed");

            lettersAlreadyGuessedInput.textContent = missedLetters;

            var movieSpacesInput = document.getElementById("movieSpaces");

            movieSpacesInput.textContent = answerArray.join(" ")  

            var lossesInput = document.getElementById("losses");

            lossesInput.textContent = losses;

            var winsInput = document.getElementById("wins");

            winsInput.textContent = wins;

            var numberOfGuessesRemainingInput = document.getElementById("numberOfGuessesRemaining");

            numberOfGuessesRemainingInput.textContent = numberOfGuessesRemaining;

        }
