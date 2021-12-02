var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(".btn").on("click", function (event) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern[userClickedPattern.length-1]); // <<<<<<<-----------------
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

    /* Play sound according to color */
    playSound(randomChosenColour)

    /*increment level value every time nextSenquence() is called. */
    $("h1").text("Level " + level);
    level++;

    

}

function playSound(name) {
    /* Play sound according to color */
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100)
}

/* Only call the function once -> the first time that press any key on keyboard */
$(document).keydown(function (event) {
    if (!started) {
        nextSequence()
        started = true;
    } else {
        console.log("Already playing");
    }
});


function checkAnswer(currentLevel) { // <<<<<<<-----------------
  if(currentLevel === gamePattern[gamePattern.length -1]){
    console.log(userClickedPattern);
    console.log(gamePattern);
    if(JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern)){
        console.log("Success baby");       
        setTimeout(function(){
            nextSequence();
        }, 1000);
        userClickedPattern = [];
     }
     else{
        console.log("wrong BEBE");
     }
  }else{
    console.log("wrong");
  } 
} 