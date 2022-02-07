//  let inches = 132;
//  function inchToFeet(inches){
//      let feet = inches / 12;
//      return feet;
//  }

//  let result = inchToFeet(inches);
//  console.log(result);

 
 function anaToVori(ana){
     let vori = ana / 16;
     return vori;
 }
 let twoAna = 150;
 let resultAna = anaToVori(twoAna);
 console.log(resultAna);

 //Problem no 2 pandaCost
 function pandaCost(singara, samucha, gilabi){
    var totalSingara =  singara * 50;
    var totalSamucha = samucha * 40;
    var totalGilabi = gilabi * 30;
     total = totalSingara + totalSamucha + totalGilabi;
    return total;
 }
 
 var totalAmount = pandaCost(7 , 10, 15);
 console.log(totalAmount);

// Problem no 3 picnic BUdget
function picnicBudget(friends){
    let amount;
    if (friends <= 100){
        amount = friends * 5000;
    }else if(friends <= 200){
        let firstFriend = 100 * 5000;
        let othersFriend = (friends - 100 ) * 4000;
        amount = firstFriend + othersFriend;
    }else{
        let firstFriend = 100 * 5000;
        let secondFriend = 100 * 4000;
        let othersFriend =  (friends - 200) * 3000;
        amount = firstFriend + secondFriend + othersFriend;

    }
    return amount;
}

const totalFriends = picnicBudget(280);
console.log(totalFriends);



