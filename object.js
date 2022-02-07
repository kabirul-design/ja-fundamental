var computer ={
    price: 20000,
    storage: '156gb',
    processor: 'intel i5'

}
// console.log(computer);
// console.log(computer.processor);

var computerPrice = computer.price;

var priceProperty = "price";
computer.price = 23000;
computer['price'] = 23000;
computer[priceProperty] = 23000;
 
console.log(computer);
