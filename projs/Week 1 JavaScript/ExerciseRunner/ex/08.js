// Read 3 numbers and print the smallest


console.log('Ex 08 Solution');

//initialize variables
var num1 = +prompt('Enter first num: ');
var num2 = +prompt('Enter second num: ');
var num3 = +prompt('Enter third num: ');
var smallest = num1;

//calculation
if (smallest > num2) {
    smallest = num2;
}
if (smallest > num3) {
    smallest = num3;
}

//output
console.log('The smallest number is: '+ smallest);
