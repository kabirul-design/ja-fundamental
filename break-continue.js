// var i = 0;
// while(i < 10){
//     console.log(i);
// if(i == 5){
//     break;
// }
//     i++;
// }

// for(var i = 0; i < 10; i++){
//     console.log(i);
//     if(i > 7){
//         break;
//     }
// }

var numbers = ['11', '22', '33', '44', '55', '66'];
// for(var i = 0; i<numbers.length; i++){
//     var number = numbers[i];
//     console.log(number);
//     if (number > 50){
//         break;
//     }
// }

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 40){
        continue;
    }
    console.log(number);
}