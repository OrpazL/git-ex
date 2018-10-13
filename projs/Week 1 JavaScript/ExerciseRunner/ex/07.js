// Read 3 numbers and check if the 3rd is the sum of the first two, if so, print all
// numbers to the console like this: 6 + 4 = 10

console.log('Ex 07 Solution');

//initialize variables
var num1 = +prompt('Enter num1: ');
var num2 = +prompt('Enter num2: ');
var num3 = +prompt('Enter num3: ');

//condition + output
if(num1 + num2 === num3) {
    console.log(num1 + ' + ' + num2 + ' = ' + num3);
}

console.log('Done.')