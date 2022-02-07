const names = ['babul', 'rony', 'boney', 'dablu', 'anamul', 'bipul', 'sawkat', 'babul', 'boney', 'rony'];



// function removeDuplicates(names){
//     const unique = [];

//     for(const element of names){
//         console.log(element);
//         if(unique.indexOf(element) == -1){
//             unique.push(element);

//         }
//     }
//     return unique;
// }

// const uniqueNames = removeDuplicates(names);
// console.log(uniqueNames);

function removeDuplicates(names){
    const unique = [];
    // for(let i = 0; i <names.length; i++){
    //     const element = [i];
    //     console.log(element);
    // }
    for(const element of names){
        console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicates(names);
console.log(uniqueNames);