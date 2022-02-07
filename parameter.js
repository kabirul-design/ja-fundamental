function bringSingara(taka){
    console.log('give the money ',taka);
    var singraPrice = 10;
    var singraQuantity = taka/ singraPrice;
    return singraQuantity;
}
var money = 250;
var singara = bringSingara(money);

console.log('ei nen singara', singara);
