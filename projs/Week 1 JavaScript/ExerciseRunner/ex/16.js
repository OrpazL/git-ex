// Write a function isEven that gets a number, and returns true if the number is
// even otherwise false. 

console.log('Ex 16 Solution');

function isEven (num) {
    // if (num % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return num % 2 === 0;
}

var num = +prompt('Enter num:');

console.log('is ' + num + ' is even? ' + isEven(num));