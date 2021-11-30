
var randomNumber1 = Math.floor(Math.random(5) * 6 + 1);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random(5) * 6 +1);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")

function winnerLoser(randomNumber1, randomNumber2){
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "Player 1 Wins! 🚩"
    }else if( randomNumber1 < randomNumber2){
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
    }else{
        document.querySelector("h1").textContent = "Draw"
    }
}
winnerLoser(randomNumber1, randomNumber2);



