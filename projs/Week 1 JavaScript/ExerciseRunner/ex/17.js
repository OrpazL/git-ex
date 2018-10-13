// Write a function getBigger that receives 2 numbers and returns the bigger. 

console.log('Ex 17 Solution');

function getBigger (num1 , num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

var num1 = +prompt('Enter num1: ');
var num2 = +prompt('Enter num2: ');

console.log(getBigger(num1 , num2));
