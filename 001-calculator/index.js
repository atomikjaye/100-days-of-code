//Work on Display
//Should take values from numbered buttons

let display = document.getElementById('display');
let numButtons = document.querySelectorAll('.number');
let clearButton = document.getElementById('clear');
let equalButton = document.getElementById('equal');
let addButton = document.getElementById('add');
// document.querySelectorAll('button')[0].onclick = function() {{
    //     console.log(document.querySelectorAll('button'));
    // };

//Variable for number
let finishedNumber;
let totalValue = 0;
let num2;

function getNumber() {
    let number = 0;
    //Adding event listeners to each number button
    for (let i = 0; i < numButtons.length; i++){
        numButtons[i].addEventListener('click', function(){
            display.innerHTML += numButtons[i].innerHTML;
            number = Number(display.innerHTML)
            console.log(number)
        });
        
    }
    return number
}    

clearButton.addEventListener('click', clearDisplay);
equalButton.addEventListener('click', equal);
addButton.addEventListener('click', function() {
    add(Number(display.innerHTML));
    // console.log(display.innerHTML)
});

function clearDisplay() {
    display.innerHTML = '';
}

// Operator Functions

function add (value){
    console.log("clicked function")
    console.log(totalValue)
    console.log(value)
    totalValue = Number(totalValue + value);
    console.log(totalValue);
    // value.preventDefault();
}


function equal() {
    display.innerHTML = finishedNumber 
}
// Work on operations
// each operation should be a function


//Enter (=) part thingy/
getNumber();