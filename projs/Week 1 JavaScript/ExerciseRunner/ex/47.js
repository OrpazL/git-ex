// Implement your own version of the split function: mySplit(str, sep)
// Test with different types of data, i.e. : 'Japan,Russia,Sweden'
// You can assume that the separator (delimeter) is a single character
// (BONUS: don’t assume that)

console.log('Ex 47 Solution');


console.log('Split of:', mySplit('hello,,world,,world', ',,'));

function mySplit(str, sep) {

    var arr = [];
    var pointer = -1;
    for (var i = 0; i < str.length; i++) {
        if (str.substring(i, i + sep.length) === sep) {
            arr.push(str.substring(0, i));
            str = str.substr(i + sep.length, str.length);
            i = 0;
            if (str.indexOf(sep) === -1) {
                arr.push(str);
            }
        }
    }
    return arr;

}