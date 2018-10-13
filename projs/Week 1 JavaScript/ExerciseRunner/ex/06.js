// Read a, b, c from the user, those are the a,
// b, c of the quadratic equation 
// Example: if your input is: 2, -5, 2 your output should
// be something like:
// 2x2– 5x + 2 = 0
// x1 = 2 ; x2 = 0.5

console.log('Ex 06 Solution');

//initialize variables
var a = +prompt('Enter a: ');
var b = +prompt('Enter b: ');
var c = +prompt('Enter c: ');
var equation;

//create equation string
if (b < 0) {
    if (c < 0) {
        equation = a + 'x\u00B2 ' + b +'x ' + c + '= 0';
    }
    equation = a + 'x\u00B2 ' + b +'x + ' + c + '= 0';
} else if (c < 0) {
    equation = a + 'x\u00B2 + ' + b +'x ' + c + '= 0';
} else {
    equation = a + 'x\u00B2 + ' + b +'x + ' + c + '= 0';
}

//calculate results
var x1 = (-b + Math.sqrt(b*b + (-4)*a*c))/(2*a);
var x2 = (-b + -(Math.sqrt(b*b + (-4)*a*c)))/(2*a);

//output
console.log(equation);
console.log('x1: ', x1 , ' x2: ', x2);
