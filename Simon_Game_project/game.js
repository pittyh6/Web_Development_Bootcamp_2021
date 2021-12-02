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
    checkAnswer(userClickedPattern.length - 1); 
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
    $("#level-title").text("Level " + level);
    level++;

    userClickedPattern = [];

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


function checkAnswer(currentLevel) { 
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        } 
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){            
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){ 
    level=0;
    gamePattern = [];
    started=false;
}