// VOWELS (aoieu)
// o write a function printVowelsCount() that gets a string and
//   print how many times each vowel appears
// o Read a string and make the vowels lowercase, the others
//   uppercase (GiZiM GiDoo)
// o Write a function that reads a string and double all the vowels
//   in it 

console.log('Ex 33 Solution');

// TODO: function the world
var str = prompt('Enter string: ');

// printVowelsCount(str);
// doubleVowels(str);
console.log('Vowels only lower: ' + printVowelsCount(str));
console.log('Double vowels string: ' + doubleVowels(str));

function printVowelsCount(str) {
    str = str.toLowerCase();
    var countA = 0;
    var countO = 0;
    var countI = 0;
    var countE = 0;
    var countU = 0;
    var newStr = '';

    const VOWELS = 'aeoui';

    for (var i = 0; i < str.length; i++) {
        var currChar = str.charAt(i);

        // if (VOWELS.indexOf(currChar) >= 0) {
        //     newStr += currChar;
        // } else {
        //     newStr += currChar.toUpperCase();
        // }

        newStr += (VOWELS.indexOf(currChar) >= 0)?
                     currChar : 
                     currChar.toUpperCase();

        switch (currChar) {
            case 'a':
                countA++;
                break;
            case 'o':
                countO++;
                break;
            case 'i':
                countI++;
                break;
            case 'e':
                countE++;
                break;
            case 'u':
                countU++;
                break;
            
        }
    }
    console.log('count A / a: ' + countA);
    console.log('count O / o: ' + countO);
    console.log('count I / i: ' + countI);
    console.log('count E / e: ' + countE);
    console.log('count U / u: ' + countU);
    // console.log('String: ' + newStr);
    return newStr;

}

function doubleVowels(str) {
    var newStr = '';

    for (var i = 0; i < str.length; i++) {
        newStr += str.charAt(i);
        switch (str.charAt(i)) {
            case 'a':
            case 'A':
            case 'o':
            case 'O':
            case 'i':
            case 'I':
            case 'e':
            case 'E':
            case 'u':
            case 'U':
                newStr += str.charAt(i);
                break;
        }
    }
    return newStr;
    
}
