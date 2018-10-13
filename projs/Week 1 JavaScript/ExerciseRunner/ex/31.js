// read a string and print:
// o Its length
// o Its first and last chars
// o in uppercase and lowercase

console.log('Ex 31 Solution');

function ex31() {
    var str = prompt('Enter string: ');
    console.log('Length: ' + str.length);
    console.log('First char: ' + str.charAt(0));
    console.log('Last char: ' + str.charAt(str.length - 1));
    console.log('In uppercase: ' + str.toUpperCase());
    console.log('In lowercase: ' + str.toLowerCase());
}
ex31();