
var randomNumber1 = Math.floor(Math.random(5) * 6 + 1);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random(5) * 6 +1);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")
console.log(randomNumber2);