// function mularDam(quantity){
//     if(typeof quantity != "number"){
//         return "please enter your valid quantity"
//     }
//     if(quantity <= 0){
//         return "please Enter your valid quantity"
//     }
//     if(quantity > 20){
//         return " please less than that";
//     }
//     let total;
//     if(quantity <= 2){
//         total = quantity * 30;
//     }
//      else if(quantity > 4){
//         total = quantity * 20;
//     }
//      else{
//         total = quantity * 25;
//     }
//     return total;
// }

// const totalPrice = mularDam(30);
// console.log(totalPrice);

// function electricityBill(unit){
//     let bill;
//     if (unit <= 100){
//         bill = unit * 5;
//     }else if(unit > 200){
//         let firstBill = 100 * 5;
//         let secondBill = 100 * 6;
//         let reamingBill = (unit - 200) * 7;
//         bill = firstBill + secondBill + reamingBill;
//     }else if(unit > 100){
//         let firstBill = 100 *5;
//         let reamingBill = (unit - 100) * 6;
//         bill = firstBill + reamingBill;
//     }
//     return bill;
// }

// const totalBill = electricityBill(300);
// console.log(totalBill);


// two type of functions 
// function electricityBill(unit){
//     let bill;
//     if (unit <= 100){
//         bill = unit * 5;
//     }else if(unit <= 200){
//         let firstBill = 100 *5;
//         let reamingBill = (unit - 100) * 6;
//         bill = firstBill + reamingBill;
//     }else{
//         let firstBill = 100 * 5;
//         let secondBill = 100 * 6;
//         let reamingBill = (unit - 200) * 7;
//         bill = firstBill + secondBill + reamingBill;
//     }
//     return bill;
// }

// GPA Result 
function checkGPA(marks){
    for(let i = 0; i < marks.length; i++){
     let element = marks [i];
        if(element >= 80){
            return true;
        }

    }
    return false;
}

console.log( checkGPA([78, 80, 69]));



function secondLargestElement(array){
    let largest = array[0];
    let secondLargest = array[0];
    for(let i = 0; i<array.length; i++){
        let element = array[i];
        if(element > largest){
            secondLargest = largest;
            largest = element;
        }
        else if(element > secondLargest){
            secondLargest = element;
        }       
    }
    return secondLargest;
}
    let array = [34,47, 45, 56, 66, 80];
    console.log(secondLargestElement(array));





// const totalBill = electricityBill(150);
// console.log(totalBill); 

// function evenNumber(){
//     for(let i = 1; i <= 20; i++){
//         if(i%2 != 1){ // not equal to hole..even number or == hole 1 3 5 7  
//             console.log(i);
//         }
//     }
// }
// evenNumber();

// function divisibleNumberCountByThree(){
//     let count = 0;
//     for(let i = 1; i <= 20; i++){
//         if(i%3 == 0){
//             count = count + 1;
//         }
//     }
//     return count;
// }
// let result = divisibleNumberCountByThree();
// console.log(result);

// calculate the average of all that is divisible number 1- 20;
function divisibleNumberAverage(n){
    let sum = 0, count = 0;
  for(let i = 1; i< n; i++){
      if(i%2 !== 0){
          sum = sum + i;
          count = count + 1;

      }
  }
  let avg = sum / count;
  return avg;
}

let totalSum = divisibleNumberAverage(100)
console.log(totalSum);


function oddFriend(oddName){
    let oddFr = [];
    for(let i = 0; i < oddName.length; i++){
        let friendName = oddName[i];
        if(friendName.length % 2 !== 0){
            oddFr = friendName;
            break;
        }
    }
    return oddFr
}
let arrayN = ["jo","kamal", "leo", "george","shawon", "kazol" ];
let arrayResult = oddFriend(arrayN);
console.log(arrayResult);

// function addTwoNumber(num1, num2){
//     let sum = num1 + num2;
//     console.log(sum);
// }

// addTwoNumber(23, 45);
// addTwoNumber(56, 78);
// let x = 55;
// let y = 33;
// addTwoNumber(x, y);

// function vowelCount(sentence){
//     let count = 0;
//     let vowels = ["a", "e", "i", "o", "u"];
//    for(const letter of sentence){
//     //    let letter = sentence[i];
//         if(vowels.indexOf(letter) > -1){
//             count = count + 1;
//         } 
//    }
//    return count;
// }

// let string = " Quick brown for jump over the lazy dog";
// console.log(vowelCount(string));

// function vowelCount(sentence){
//     let count = 0;
//     for(let i = 0; i< sentence.length; i++){
//         let letter = sentence [i];
//         if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
//             count = count + 1;
//         }
//     }
//     return count;
// }

// let string = "Quick brown fox jump over the lazy dog";
// console.log(vowelCount(string));
