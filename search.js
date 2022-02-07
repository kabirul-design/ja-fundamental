const products = [
    {name : 'iPhone 12 max', Price : 70000},
    {name : 'iPhone 10',     Price : 60000},
    {name : 'Samsung Galaxy',Price : 30000},
    {name : 'laptop HP',     Price : 74000},
    {name : 'lenovo Ipad',   Price : 31000},
    {name : 'smart watch',   Price : 7000},
    {name : 'apple watch',   Price : 7500},
    {name : 'Plus One Phone',Price : 41000},
];

function searchProducts(products, searchText){
    const result = [];
    for(const product of products){
        if(product.name.includes(searchText)){
            result.push(product);
        }
    }
    return result;
}

const matched = searchProducts(products, 'Samsung');
console.log(matched);