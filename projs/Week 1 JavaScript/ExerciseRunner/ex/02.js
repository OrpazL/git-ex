//Read two numbers and print the result of the following operations on them: (*, /, %)

console.log('Ex 02 Solution');

//initialize variables
var num1 = +prompt('Enter first number: ');
var num2 = +prompt('Enter second number: ');
var result;

//calculation & output
result = num1 * num2;
console.log('Mult: ', result);

result = num1 / num2;
console.log('Div: ', result);

result = num1 % num2;
console.log('Modulu: ', result);