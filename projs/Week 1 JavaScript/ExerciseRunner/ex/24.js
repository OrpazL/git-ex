// Play with the function Math.abs() , read the documentation in MDN
// a) Write your own function myAbs()

'use strict';

console.log('Ex 24 Solution');

function myAbs(num) {
    if (num < 0) {
        return num * -1;
    } else return num;
}

var num = +prompt('Enter num:');
console.log('Abs: ' + myAbs(num));
