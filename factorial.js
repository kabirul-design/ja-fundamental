// 3! = 3* 2* 1
// 4! = 4* 3* 2* 1
// 5! = 5* 4* 3* 2* 1


// for(var i = 1; i<= 7; i++){
//     console.log(i);
//     var factorial = 1;
//     factorial = factorial * i;
// }

// let factorial = 1;

// for( let i = 1; i <= 5; i++ ){
//     factorial = factorial * i;
// }
// console.log(factorial);

// function factorial(number){
//     let fact = 1;
//     for(let i = 1; i <= number; i++){
//         fact = fact * i;
//     }
//     return fact
// }

// let firstNumber = factorial(7)
// console.log('my first factorial', firstNumber);

// let secondNumber = factorial(9);
// console.log('second factorial', secondNumber);


// function getFactorial(number){
//     let factorial = 1;
//     let i = 1;
//     while( i <= number){
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// const myFactorial = getFactorial(6);
// console.log('my factorial', myFactorial);

function getFactorial(number){
    let factorial = 1;
    let i = number;
    while( i >= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}


const myFactorial = getFactorial(6);
console.log('my new factorial', myFactorial);
