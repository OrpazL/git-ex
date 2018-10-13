// Read a string and print it backwards using loop

console.log('Ex 32 Solution');


//TODO: function it dude!

var str = prompt('Enter string: ');
console.log('Reversed: ' + reverseStr(str));

function reverseStr(str) {
    var reversedStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr += str.charAt(i);
    }
    return reversedStr;
}
