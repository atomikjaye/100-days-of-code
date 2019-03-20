// console log if a button has been clicked

var buttons = document.querySelectorAll("button");
var numButtons = document.querySelectorAll(".number");
var display = document.querySelector("#display");

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        var key = e.target.innerText;
        if (display.innerText === "0") {
            console.log(display);
            display.innerText = key;
        } else if(
            key === "+" ||
            key === "-" ||
            key === "x" ||
            key === "÷"){
                console.log("You Clicked and Operation Key");
            } else if(key === "C" ){
                if (display.innerText !== "0") {
                    display.innerText === "0"
                }
                 console.log("You Clicked the Clear key");
            } else if(key === "."){
                console.log("You Clicked the Decimal Key")
            } else if(key === "="){
                console.log("You Clicked the Calculate Key")
            } else {
                display.innerText += key
            }
            console.log(e.target.innerText)
    })
});



console.log(buttons);
console.log(display.innerText);