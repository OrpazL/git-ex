// Ask the user for 3 digits and print the number in full
// for example: if the user entered 3,2,6 then we should have a variable holding
// the value 326 and then print that variable.
// a) BONUS: In this case, working with strings is easier, try solving using
// numeric variables

console.log('Ex 05 Solution');

//initialize variables
var digit1 = prompt('Enter first digit: ');
var digit2 = prompt('Enter second digit: ');
var digit3 = prompt('Enter third digit: ');
var strNum = digit1 + digit2 + digit3;
var numericNum = +digit1*100 + +digit2*10 + +digit3;


//output
console.log('String num: ' + strNum);
console.log('Numeric num: ' + numericNum);
