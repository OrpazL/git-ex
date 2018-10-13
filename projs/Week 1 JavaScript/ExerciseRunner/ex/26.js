// Write a program that generates 10 random numbers.
// The numbers should be generated so each number is greater than the ones
// generated before.
// To simplify, generate the first number n so it is between (0→1000), and each
// subsequent number will be in the range of ( n → n+1000)

'use strict';

console.log('Ex 26 Solution');

var num = getRandomInteger(0, 1000);
for (var i = 0; i < 10; i++) {
    num = getRandomInteger(num, num + 1000);
    console.log('Num: ' + num);
}

