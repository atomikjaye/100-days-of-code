// console log if a button has been clicked

var buttons = document.querySelectorAll("button");

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        var key = e.target.innerText;
        if(
            key === "+" ||
            key === "-" ||
            key === "x" ||
            key === "÷"){
                console.log("You Clicked and Operation Key");
            }
            console.log(e.target.innerText)
    })
});



console.log(buttons);