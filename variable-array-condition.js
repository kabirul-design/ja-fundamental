var bottleColor = "yellow";
var waterQuantity = 1;
var isFull = false;

// array 

var items = ['bottle', 'mog', 'paper', 'pen'];

items.indexOf('logens'); // -1
items.push('envelop');
items.push('water');
items.pop();

// conditions

if (items.length >=4){
    console.log('you have to many stuff on ');
}

else if (items.length == 4){
    console.log('you have only 1 hali');
}

else{
    console.log('wow you have a clean desk');
}
