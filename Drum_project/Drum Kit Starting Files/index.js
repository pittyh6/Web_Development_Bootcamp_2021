// document.querySelector("button").addEventListener("click", function (){
//     alert("I got clicked!");
// })

var numberDrumbtn = document.querySelectorAll(".drum").length;

for(var i = 0; i <= numberDrumbtn; i++){
    console.log("entrei")
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        alert("I got clicked!");
    });    
}