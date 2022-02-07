// function multiplayedNumber(num1 , num2){
//     const result = num1 + num2 ;
//     return result;
// }

// const resultNumber = multiplayedNumber(18, 35);
// console.log(resultNumber);

// function multiNumber(num1 , num2){
//     const result = num1 * num2;
//     return result;
// }

// const totalResult = multiNumber(44, 77);
// console.log(totalResult);

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 5;
    const perTableWood = 4;
    const perBedWood = 60;
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    
    const totalWoodQuantity = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return totalWoodQuantity;
}

const firstOptions = woodCalculator(1,1,1);
console.log(firstOptions);