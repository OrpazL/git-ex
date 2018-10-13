// Write the function myPow that gets 2 params: base, exp and returns the
// power. (use a loop…)

'use strict';

console.log('Ex 22 Solution');


var base = +prompt('Enter base: ');
var exp = +prompt('Enter exp: ');

console.log('Pow: ' + myPow(base, exp));

function myPow(base, exp) {
    var result = 1;
    for (var i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}