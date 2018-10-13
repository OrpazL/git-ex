// Write a function: generatePass(passLength) that generates a
// password of a specified length. Password is made out of random singledigit
// numbers.

console.log('Ex 37 Solution');

function generatePass(passLength) {
    var psw = '';
    for (var i = 0; i < passLength; i++) {
        psw += Math.floor(Math.random() * Math.floor(10));
    }
    return psw;
}
var passLength = +prompt('Ented pass length:');

console.log('Password generated: ' + generatePass(passLength));
