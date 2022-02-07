// add number function 
function addNumbers(number1, number2){
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}

var firstNumber = 55;
var secondNumber = 87;
var result = addNumbers(firstNumber, secondNumber);

console.log( 'result dao', result);

// multiplications function 
function multiplyTwoNumbers(num1 , num2){
    var result = num1 * num2;
    return result;
}

var total = multiplyTwoNumbers(6, 90);
console.log('total after multiplications',total)
// negative function 

function negativeNumbers(num1, num2){
    var total = num1 - num2;
    return total;
}

var firstNumber = 400;
var secondNumber = 375;
var result = negativeNumbers(firstNumber, secondNumber);
console.log('result dao',result);

// divided function 
function dividedNumber(num1, num2){
    var total = num1 / num2;
    return total;
}

var firstNumber = 367;
var secondNumber = 15;

var result = dividedNumber(firstNumber, secondNumber);

console.log('amar divided no dau', result);

