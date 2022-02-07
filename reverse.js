let reversed = 'Hello how are you?';

function reverseString(text){
    let reverse = '';
    for(const letter of text){
        console.log(letter);
        reverse = letter + reverse;
    }
}

const reversedLetter = reverseString(reversed);
console.log(reversed);