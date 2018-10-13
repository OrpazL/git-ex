// write a function myIndexOf(str, searchStr) that accepts 2 strings,
// and returns the location of the second string in the first, if not found
// return -1 (don’t use the built-in indexOf…)

console.log('Ex 34 Solution');

function myIndexOf(str, searchStr) {
    for (var i = 0; i < str.length; i++) {
        if (searchStr.length - i <= str.length) {
            if (str.substring(i, i + searchStr.length) === searchStr) {
                return i;
            }
        }
        if (str.substring(i, searchStr.length + i) === searchStr) {
            return i;
        }
        if (str.substring(i, str.length).length < searchStr.length) {
            return -1;
        }
    }
}

var str1 = prompt('Enter main string: ');
var str2 = prompt('Enter sub string: ');
// TODO: normal msg to normal users
if (myIndexOf(str1 , str2) === -1) {
    console.log('the string ' + str2 + ' is NOT excisted in ' + str1 + ' !');
} else {    
    console.log(str2 + ' excists in ' + str1 + ' \'s ' + myIndexOf(str1, str2) + ' position');
}
