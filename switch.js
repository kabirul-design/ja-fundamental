var color = 'yellow';

if(color == 'blue'){
    console.log('color is blue');
}

else if(color == 'green'){
    console.log('color is green');
}
else if(color == 'skyblue'){
    console.log('color is skyblue');
}

else if(color == 'red'){
    console.log('color is red');
}

else{
    console.log('color is yellow');
}

switch (color){
    case 'blue' :
        console.log('color is blue');
        break;
    case 'green':
        console.log('color is green');
        break;
    case 'skyblue':
        console.log('color is skyblue');
        break;
    case 'red':
        console.log('color is red');
        break;
    case 'yellow':
        console.log('color is yellow'); 
        break;
}