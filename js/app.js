
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


//functions

function randomNumberGenerator() {
  var randomNumber = (Math.floor(Math.random()*100) + 1);
  return randomNumber;
}


function validateInput() {
  //validate number entered
  if (userGuess.value === "") {
    alert("Please enter a number between 1 and 100");
  }
  //check to see if user input has been input before.
  else if ($.inArray(userGuess.value | 0, guesses) != -1) {
    alert('You guessed this number already');
  }
  //validate user input is between 1 and 100
  else if ((userGuess.value < 0)||(userGuess.value > 100)) {
    alert('Guess must be between 1 and 100');
  }
  //validate number not text
   else if (($.isNumeric(userGuess.value)) === false) {
    alert("Numbers only");
   }

  //number clears, track the guess
  else {
    guessTracker();
  }
  //reset value in guess input box
  $("#userGuess").val("");
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
    //block out the input box & hide Guess button - do not allow anymore input;
    $('li').last().css( "background-color", "green");
    $('#userGuess').attr('disabled', 'disabled');
    $('#guessButton').hide();
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
  $('#guessList').append("<li>" + userGuess.value + "</li>");
  guesses.push(userGuess.value | 0);
  //return warm cold based on user input
  numberComparison(newNumber, userGuess.value);
  //increase guess counter
  guessCounter();
  //pushed value as a number
  $("#userGuess").val("");
}

function newGame() {
  $(".new").click(function() {
    //reset the input box to blank
    $("#userGuess").val("");
    //reset text in Warm/Cold div
    $("#feedback").text('Make your Guess!');
    //reset text in guess count and counter
    $('#count').text('0');
    guessCount = 0;
    //reset previous guesses
    $('#guessList').empty();
    //enable input field and button
    $('#userGuess').removeAttr('disabled');
    $('#guessButton').show();
    //generate a new number
    newNumber = randomNumberGenerator();
    //reset the tracker array
    guesses = [];
    //play the game!
  });
}

function playGame() {
  $("#guessButton").click(function(submitEvent) {
    //prevent button click from submitting input
    submitEvent.preventDefault();
    //run validate input
    validateInput();
  });
}

//run the program  

newGame();
playGame();

});


