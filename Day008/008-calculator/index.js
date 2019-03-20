// console log if a button has been clicked

const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");
let previousButton = "";
let previousNum = "";
let currentNum = "";
let previousOp = "";

buttons.forEach(function(button) {
	// Steps to using a Calculator
	// 1. You press a number button(s)
	// 2. May possible press a decimal
	// 3. Press an operation
	// 4. Press another number button(s)
	// 5. Hit Equals

	button.addEventListener("click", function(e) {
		const key = e.target;
		const operation = key.dataset.operation;
		if (operation) {
			// console.log("Operation Key");
			if (
				operation === "decimal" &&
				!display.textContent.includes(".") &&
				!previousOp
			) {
				if (display.textContent === "0") {
					display.textContent = "0.";
				} else {
					display.textContent += ".";
				}
			} else if (operation === "clear") {
				display.textContent = "0";
				previousNum = "";
				currentNum = "";
			} else if (
				operation !== "decimal" &&
				operation !== "clear" &&
				operation !== "equal"
			) {
				console.log("Operation key is clicked ", operation);
				previousNum = display.textContent;
				console.log(previousNum);
				previousButton = operation;
			} else if (operation === "equal") {
				currentNum = display.textContent;
				console.log(`${previousNum} ${previousOp} ${currentNum}`);
				display.textContent = calculate(
					previousNum,
					previousOp,
					currentNum
				);
				console.log(calculate(previousNum, previousOp, currentNum));
			}
		} else if (!operation) {
			if (
				previousButton === "add" ||
				previousButton === "subtract" ||
				previousButton === "multiply" ||
				previousButton === "divide"
			) {
				display.textContent = key.textContent;
				previousOp = previousButton;
				previousButton = "";
				console.log(previousOp);
			} else if (display.textContent === "0") {
				display.textContent = key.textContent;
				console.log(previousButton);
			} else if (display.textContent !== "0") {
				display.textContent += key.textContent;
				console.log(previousButton);
			}
		}
	});
});

function calculate(num1, operator, num2) {
	let calculation = 0;
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	if (operator === "add") {
		calculation = num1 + num2;
	} else if (operator === "subtract") {
		calculation = num1 - num2;
	} else if (operator === "multiply") {
		calculation = num1 * num2;
	} else if (operator === "divide") {
		calculation = num1 / num2;
	}
	// takes two numbers and an operator... depending on the operator do a calculation
	return calculation;
}

// buttons.forEach(function(button){

// // Steps to using a Calculator
// // 1. You press a number button(s)
// // 2. May possible press a decimal
// // 3. Press an operation
// // 4. Press another number button(s)
// // 5. Hit Equals

//     button.addEventListener('click', function(e){
//         var key = e.target.innerText;
//         if (display.innerText === "0") {
//             // console.log(display);
//             display.innerText += key;
//         } else if(
//             key === "+" ||
//             key === "-" ||
//             key === "x" ||
//             key === "÷"){
//                 console.log("You Clicked and Operation Key");
//             } else if(key === "C" ){
//                 if (display.innerText !== "0") {
//                     display.innerText === "0"
//                 }
//                  console.log("You Clicked the Clear key");
//             } else if(key === "."){
//                 console.log("You Clicked the Decimal Key")
//             } else if(key === "="){
//                 console.log("You Clicked the Calculate Key")
//             } else {
//                 display.innerText += key
//             }
//             console.log(e.target.innerText)
//     })
// });
