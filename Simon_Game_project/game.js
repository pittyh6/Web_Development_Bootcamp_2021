var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").on("click", function (event) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function nextSequence() {
    /* random number 0-3 */
    var randomNumber = (Math.floor(Math.random() * 4));

    /*Select color using the random number */
    var randomChosenColour = buttonColours[randomNumber];

    /* add rancom colour to the gamePattern array */
    gamePattern.push(randomChosenColour);

    /* Get element btn with same ID as in random Choose Colour */
    var btnChooseRandomByThs = $("#" + randomChosenColour);

    /* Get the same btn as color choose random  */
    $(btnChooseRandomByThs).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour)
}

function playSound(name) {
    /* Play sound according to color */
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+ currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+ currentColour).removeClass("pressed");
    }, 100)
}
