
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  	/*--- Hide information modal box ---*/
  $("a.close").click(function(){
  	$(".overlay").fadeOut(1000);
  });

//Global Variables

var guessCount = 0;
var guesses = [];

var newNumber = randomNumberGenerator();

function randomNumberGenerator() {
  var randomNumber = (Math.floor(Math.random()*100) + 1);
  return randomNumber;
}

function numberComparison(randomNumber, userInputNumber) {
  //if difference between two supplied numbers is more than x do y
  if (((randomNumber - userInputNumber) > 40 ) || ((userInputNumber - randomNumber) > 40 )) {
    $('#feedback').text('Very Cold!');
  }
  else if (((randomNumber - userInputNumber) > 30 ) || ((userInputNumber - randomNumber) > 30 )) {
    $('#feedback').text('Cold');
  }
  else if (((randomNumber - userInputNumber) > 20 ) || ((userInputNumber - randomNumber) > 20 )) {
    $('#feedback').text('Cool');
  }
  else if (((randomNumber - userInputNumber) > 10 ) || ((userInputNumber - randomNumber) > 10 )) {
    $('#feedback').text('Warm');
  }
  else if (((randomNumber - userInputNumber) > 5 ) || ((userInputNumber - randomNumber) > 5 )) {
    $('#feedback').text('Hot!');
  }
  else if (((randomNumber - userInputNumber) > 0 ) || ((userInputNumber - randomNumber) > 0 )) {
    $('#feedback').text('Very Hot!');
  }
  else if ((randomNumber / userInputNumber) === 1 ) {
    $('#feedback').text('Your Guessed the number! Click +New Game to play again.');
    $('#userGuess').attr('disabled', 'disabled');
    $('#guessButton').attr('disabled', 'disabled');
    //block out the input box - do not allow anymore input;
  }
}

function guessCounter() {
  //each time a guess is made, add to the count variable
  guessCount ++;
  //change the text in the count span
  $("#count").text(guessCount);
}

function guessTracker() {
  //append userGuessesTrackingList with new <li> element with text = userGuess.value
}

  function newGame() {
    $(".new").click(function() {
      //reset text in Warm/Cold div
      $("#feedback").text('Make your Guess!');
      //reset text in guess count and counter
      $('#count').text('0');
      guessCount = 0;
      //reset previous guesses
      $('#guessList').empty();
      //enable input field and button
      $('#userGuess').removeAttr('disabled');
      $('#guessButton').removeAttr('disabled');
      //generate a new number
      newNumber = randomNumberGenerator();
      //play the game!
    });
  }

  function playGame() {
  $("#guessButton").click(function(submitEvent) {
    //prevent button click from submitting input
    submitEvent.preventDefault();
    //run function to capture user input (held in global variable)
    console.log(userGuess.value);
    //run function to compare user input to random number
    numberComparison(newNumber, userGuess.value);
    //run function to increase guess count
    guessCounter();

    //run function to append guess to running guess list
  });
}
  

newGame();
playGame();

});


