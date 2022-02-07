const phones = [
    {brand : 'samsung', Price: 40000, camera : 12, storage : 32},
    {brand : 'iphone', Price: 80000, camera : 30, storage : 64},
    {brand : 'xaomi', Price: 20000, camera : 16, storage : 32},
    {brand : 'oppo', Price: 12000, camera : 12, storage : 16},
    {brand : 'htc', Price: 8000, camera : 12, storage : 16},
    {brand : 'vivo', Price: 18000, camera : 25, storage : 32},
]

let cheapest = phones[0];

for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);