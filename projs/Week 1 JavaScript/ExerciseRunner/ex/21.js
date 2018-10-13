// Read numbers, until the number 999 is entered.
// For each number:
// a) Print if it’s divided by 3
// b) Print whether this num is much bigger (more than 10) than
// the previous number.

'use strict';

console.log('Ex 21 Solution');

function ex21() {

    var num = +prompt('Enter num:');
    var prevNum = null;

    while (num !== 999) {

        if (num % 3 === 0) {
            console.log(num + ' is divided by 3.');
        }
        if (prevNum !== null && (num > prevNum) && (Math.abs(num - prevNum)) > 10) {
            console.log(num + ' is much bigger than the previous number ' + prevNum);
        }
        prevNum = num;

        num = +prompt('Enter num:');
    }
}
ex21();

