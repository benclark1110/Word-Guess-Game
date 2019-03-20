//Set of characters
var characters = ["maeby", "tobias", "lucille", "gob", "michael", "lindsay", "oscar"];
//Randomly select character from above
var randomCharacters = characters[Math.floor(Math.random() * characters.length)];
//Array to hold answer characters
var answerArray = [];
console.log(randomCharacters);
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
//Variable for acceptable characters
var allowedCharacters = "qwertyuiopasdfghjklzxcvbnm"
//Theme song
var audio = new Audio('assets/music/arrestedDevelopmentTheme.mp3');

    document.onkeyup = function(event) {

        //Preventing user from selecting anything other than letters
        if (!allowedCharacters.includes(event.key)) {
            alert("Please use valid key")
        }
        
        function callCharacters(){
            for (i = 0; i < randomCharacters.length; i++) {
                answerArray[i] = "_";
                console.log(answerArray)
            }
        }

        //Setting original Value to False.
        letterPresent = false;

        //Checking letters from character for a matching letter            
        for (i = 0; i < randomCharacters.length; i++) {
            if (randomCharacters[i] === event.key.toLowerCase()) {
                letterPresent = true;
                console.log(letterPresent);
                answerArray[i] = event.key.toLowerCase();
            }
        }

        //Adding to correctLetters Array if it isnt already there
        if (letterPresent && !correctLetters.includes(event.key.toLowerCase())) {
            correctLetters.push(event.key.toLowerCase());
            console.log(correctLetters);
        }

        //Adding to missedLetters Array if it isnt already there
        if (!letterPresent && !missedLetters.includes(event.key.toLowerCase()) && allowedCharacters.includes(event.key)) {
            missedLetters.push(event.key.toLowerCase());
            console.log(missedLetters);
            numberOfGuessesRemaining--;
        }

        //Checking for number of misses to track a loss
        if (missedLetters.length >= 6) {
            losses++;
            reset();
            audio.pause();
        }

        //Checking for number of correct guesses to track a win
        if (answerArray.includes("_") === false) {
            wins++;
            reset();
            audio.play();
        }

        //Reset Function
        function reset (){
            answerArray = [];
            missedLetters = [];
            correctLetters = [];
            randomCharacters = characters[Math.floor(Math.random() * characters.length)];
            console.log(randomCharacters)
            letterPresent = false;
            numberOfGuessesRemaining = 6;
            callCharacters();
        }

        var lettersAlreadyGuessedInput = document.getElementById("lettersAlreadyGuessed");

        lettersAlreadyGuessedInput.textContent = missedLetters;

        var charactersSpacesInput = document.getElementById("charactersSpaces");

        charactersSpacesInput.textContent = answerArray.join(" ")  

        var lossesInput = document.getElementById("losses");

        lossesInput.textContent = losses;

        var winsInput = document.getElementById("wins");

        winsInput.textContent = wins;

        var numberOfGuessesRemainingInput = document.getElementById("numberOfGuessesRemaining");

        numberOfGuessesRemainingInput.textContent = numberOfGuessesRemaining;

    }
