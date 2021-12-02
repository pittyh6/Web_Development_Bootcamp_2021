var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    /* random number 0-3 */
    var randomNumber = (Math.floor(Math.random() * 4));
    console.log(randomNumber + " randomNumber");

    /*Select color using the random number */
    var randomChosenColour = buttonColours[randomNumber];
    console.log(randomChosenColour + " randomChosenColour")
    
    /* add rancom colour to the gamePattern array */
    gamePattern.push(randomChosenColour);
    console.log(gamePattern + " gamePatter");
  
   /* Get element btn with same ID as in random Choose Colour */
    var btnChooseRandomByThs = $("#"+randomChosenColour);

     /* Get the same btn as color choose random  */
    $(btnChooseRandomByThs).fadeOut(100).fadeIn(100);

    /* Play sound according to color */
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

