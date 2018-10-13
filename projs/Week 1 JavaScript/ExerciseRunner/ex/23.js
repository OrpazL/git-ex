// Write the function factorial that gets a number n and return n!

'use strict';

console.log('Ex 23 Solution');

function factorial(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

var num = +prompt('Enter num to get it\'s factorial:');
console.log('Factorial: ' + factorial(num));