var skyColor = 'white';


var brandName = ['iphone', 'samsung', 'xaomi', 'lg', 'htc'];

brandName[3] = 'walton';


// check oppo not existing in an array 
if (brandName.indexOf('oppo') == -1){
    console.log('oppo is no here');
}

if(brandName.indexOf('lg')!= -1){
    console.log('lg is available');
}

