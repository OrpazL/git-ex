// Write a program to compute the greatest common divisor (GCD) of two
// positive integers.
// Example: 6, 15 => gcd: 3
// Hint: we need something like a loop: i 6 -> 2 and check modulus.

'use strict';

console.log('Ex 28 Solution');

var num1 = +prompt('Enter num1: ');
var num2 = +prompt('Enter num2: ');

var smallest = num1;
if (num2 < num1) smallest = num2;

var gcd = 1;
for (var i = 0; i <= smallest; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
    }
}
console.log('GCD: ' + gcd);
