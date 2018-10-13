// Read 2 names and print the longer one

console.log('Ex 30 Solution');

function findLonger(str1, str2) {
    // console.log((str1.length > str2.length) ? str1 : str2);
    return ((str1.length > str2.length) ? str1 : str2);
}

var name1 = prompt('Enter string 1: ');
var name2 = prompt('Enter string 2: ');

console.log('The longer str is: ', findLonger(name1, name2))