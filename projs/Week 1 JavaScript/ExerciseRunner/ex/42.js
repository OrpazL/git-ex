// Write a function startWithS that gets an array of names and returns an
// array of the names that start with S
// a. Refactor your function to work on any letter by adding a letter
// argument

console.log('Ex 42 Solution');

function startWithChar(namesArray, char) {
    char = char.toLowerCase();
    var resArr = [];
    for (var i = 0; i < namesArray.length; i++) {
        var currName = namesArray[i];
        if (char === currName.toLowerCase().charAt(0)) {
            resArr.push(currName);
        }
    }
    // console.log(startWithArray);
    return resArr;
}

var char = prompt('Enter char: ');
var namesArray = [
    'Buster',
    'Sandee',
    'Marva',
    'Evangeline',
    'Anton',
    'Vivian',
    'Winnie',
    'Mari',
    'Bryon',
    'Nyla'
];
console.log(startWithChar(namesArray, char));

