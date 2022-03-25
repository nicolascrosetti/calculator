const add = (a,b) => {
    return a+b;
}

const subtract = (a,b) => {
    return a-b;
}

const multiply = (a,b) => {
    return a*b;
}

const divide = (a,b) => {
    if (b == 0){
        return "Math error";
    }
    return a/b;
}

const operate = (operator,a,b) => {
    let result = 0;
    switch(operator){
        case "+": 
            result = add(a,b);
            break;
        case "-":
            result = subtract(a,b);
            break;
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;
    }

    return result;
}

const btnNumbers = document.querySelectorAll(".btn-number");
const btnOperators = document.querySelectorAll(".btn-operator");
const btnEqual = document.querySelector('#btn-equal'); 
const btnClear = document.querySelector('#btn-clear');
const display = document.querySelector("#display");
let firstNumber = 0;
let secondNumber = 0;
let operatorSign = '';

btnNumbers.forEach(number => {
    number.addEventListener('click', () =>{
        display.value += number.textContent;
    });
});

btnOperators.forEach(operator => {
    operator.addEventListener('click', () =>{
        if (operatorSign == ''){
            firstNumber = parseInt(display.value);
            operatorSign = operator.textContent;
            display.value = '';
        }else{
            secondNumber = parseInt(display.value);
            display.value = Math.floor((operate(operatorSign, firstNumber, secondNumber)) * 100) / 100;
            firstNumber = parseInt(display.value);
            operatorSign = operator.textContent;
            display.value = '';
        }
    });
});

btnEqual.addEventListener('click', () => {
    if(operatorSign != ''){
        secondNumber = parseInt(display.value);
        display.value = Math.floor((operate(operatorSign, firstNumber, secondNumber)) * 100) / 100;
    }
});

btnClear.addEventListener('click', () => {
    display.value = '';
    firstNumber = 0;
    secondNumber = 0;
    operatorSign = '';
});