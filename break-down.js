const products = [
    {name : 'iPhone 12 max', Price : 70000},
    {name : 'iPhone 10',     Price : 20000},
    {name : 'Samsung Galaxy',Price : 30000},
    {name : 'laptop HP',     Price : 50000},
    {name : 'lenovo Ipad',   Price : 6000},
    {name : 'smart watch',   Price : 7000},
    {name : 'apple watch',   Price : 7500},
    {name : 'Plus One Phone',Price : 12000},
];

// function searchProduct(products, searchText){
    // for(const product of products){
    //     if(product.price >10000){
    //         break;
    //     }
    //     console.log(product);
    // }
    for(const product of products){
        if(product.price >10000){
            continue;
        }
        console.log(product);
    }
    
// }

// const result = searchProduct(products);
// console.log(result);

let a = 'hi';
let b = 'there';
console.log(a+b);

let array = [1, 2, 3, 4, 5, 6, 7];
for(let i = 5; i< array.length; i++){
    if(i == 5){
        continue;
    }
    console.log(array[i]);
}