const clearButton = document.querySelector(".clear-button");
const deleteButton = document.querySelector(".delete-button");

const sevenButton = document.querySelector(".seven-button");
const eightButton = document.querySelector(".eight-button");
const nineButton = document.querySelector(".nine-button");
const fourButton = document.querySelector(".four-button");
const fiveButton = document.querySelector(".five-button");
const sixButton = document.querySelector(".six-button");
const oneButton = document.querySelector(".one-button");
const twoButton = document.querySelector(".two-button");
const threeButton = document.querySelector(".three-button");
const zeroButton = document.querySelector(".zero-button");

const divisionButton = document.querySelector(".division-button");
const multiplyButton = document.querySelector(".multiply-button");
const substractButton = document.querySelector(".substract-button");
const addButton = document.querySelector(".add-button");
const decimalButton = document.querySelector(".decimal-button");
const equalsButton = document.querySelector(".equals-button");

const display = document.querySelector(".current-number");

let firstNumber = [];
let secondNumber = [];
let operator = "";

let writingMode = 0;

function operate(firstNumber, operator, secondNumber) {
    if (operator == "division") {
        let result = parseInt(firstNumber.join("")) / parseInt(secondNumber.join(""));
        display.textContent = result;
        return result;
    } else if (operator == "multiply") {
        let result = parseInt(firstNumber.join("")) * parseInt(secondNumber.join(""));
        display.textContent = result;
        return result;
    } else if (operator == "substract") {
        let result = parseInt(firstNumber.join("")) - parseInt(secondNumber.join(""));
        display.textContent = result;
        return result;
    } else if (operator == "add") {
        let result = parseInt(firstNumber.join("")) + parseInt(secondNumber.join(""));
        display.textContent = result;
        return result;
    }
    firstNumber = result;
    secondNumber = [];
    console.log(firstNumber);
    console.log(result);
}

//////////////////////
///////////////////// FOUR TYPES OF EQUATIONS BUTTONS
////////////////////
divisionButton.addEventListener("click", () => {
    if (writingMode == 0 && firstNumber.length > 0) {
        operator = "division";
        writingMode = 1;
    }
})

multiplyButton.addEventListener("click", () => {
    if (writingMode == 0 && firstNumber.length > 0) {
        operator = "multiply";
        writingMode = 1;
    }
})

substractButton.addEventListener("click", () => {
    if (writingMode == 0 && firstNumber.length > 0) {
        operator = "substract";
        writingMode = 1;
    }
})

addButton.addEventListener("click", () => {
    if (writingMode == 0 && firstNumber.length > 0) {
        operator = "add";
        writingMode = 1;
        console.log(operator);
    }
})
////////////////////////////
//////////////////////////// ALL NUMBERED BUTTONS
////////////////////////////

oneButton.addEventListener("click", () => {
    if (writingMode == 0 && firstNumber.length < 15) {
        firstNumber.push("1")
        console.log(firstNumber)
        let joinedFirstNumber = firstNumber.join("");
        display.textContent = joinedFirstNumber;
    }
    if (writingMode == 1 && secondNumber.length < 15){
        secondNumber.push("1")
        console.log(secondNumber)
        let joinedSecondNumber = secondNumber.join("");
        display.textContent = joinedSecondNumber;
    }
});

twoButton.addEventListener("click", () => {
    if (writingMode == 0 && firstNumber.length < 15) {
        firstNumber.push("2")
        console.log(firstNumber)
        let joinedFirstNumber = firstNumber.join("");
        display.textContent = joinedFirstNumber;
    }
    if (writingMode == 1 && secondNumber.length < 15){
        secondNumber.push("2")
        console.log(secondNumber)
        let joinedSecondNumber = secondNumber.join("");
        display.textContent = joinedSecondNumber;
    }
});

threeButton.addEventListener("click", () => {
    if (writingMode == 0) {
        firstNumber = 3;
        display.textContent = 3;
        writingMode = 1;
    }
    if (writingMode == 2){
        secondNumber = 3;
    }

});

fourButton.addEventListener("click", () => {
    if (writingMode == 0) {
        firstNumber = 4;
        display.textContent = 4;
        writingMode = 1;
    }
    if (writingMode == 2){
        secondNumber = 4;
    }

});

fiveButton.addEventListener("click", () => {
    if (writingMode == 0) {
        firstNumber = 5;
        display.textContent = 5;
        writingMode = 1;
    }
    if (writingMode == 2){
        secondNumber = 5;
    }
});

sixButton.addEventListener("click", () => {
    if (writingMode == 0) {
        firstNumber = 6;
        display.textContent = 6;
        writingMode = 1;
    }
    if (writingMode == 2){
        secondNumber = 6;
    }
});

sevenButton.addEventListener("click", () => {
    if (writingMode == 0) {
        firstNumber = 7;
        display.textContent = 7;
        writingMode = 1;
    }
    if (writingMode = 2){
        secondNumber == 7;
    }

});

eightButton.addEventListener("click", () => {
    if (writingMode == 0) {
        firstNumber = 8;
        display.textContent = 8;
        writingMode = 1;
    }
    if (writingMode == 2){
        secondNumber = 8;
    }

});

nineButton.addEventListener("click", () => {
    if (writingMode == 0) {
        firstNumber = 9;
        display.textContent = 9;
        writingMode = 1;
    }
    if (writingMode == 2){
        secondNumber = 9;
    }

});

zeroButton.addEventListener("click", () => {
    if (writingMode == 0) {
        firstNumber = 0;
        display.textContent = 0;
        writingMode = 1;
    }
    if (writingMode == 2){
        secondNumber = 0;
    }

});

equalsButton.addEventListener("click", () => {
    if (writingMode == 1) {
        operate(firstNumber, operator, secondNumber);
    }
})

clearButton.addEventListener("click", () => {
    display.textContent = "";
    writingMode = 0;
    firstNumber = [];
    secondNumber = [];
})