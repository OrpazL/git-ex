// Write a function: getLoremIpsum(wordsCount) that return a
// sentence with made-up words (google for: lorem ipsum...)
// TIP, here are the steps you may use to get there:
// o first write a function getWord() that returns a single word with
// random letters and size 3
// Tip: you can create a string or an array of all the characters in
// english.
// o Now change the size to be a random number between 3-5.
// o Now call this function in a loop to create a sentence

console.log('Ex 40 Solution');

function getLoremIpsum(wordsCount) {
    var sentence = '';
    for (var i = 0; i < wordsCount; i++) {
        sentence += getWord() + ' ';
    }
    return sentence.substring(0, sentence.length - 2);
}

var wordsCount = prompt('Enter the num of words: ');
console.log(getLoremIpsum(wordsCount));

// returns made-up word (size 3-5)
function getWord() {
    var word = '';
    var possible = 'abcdefghijklmnopqrstuvwxyz';
    var wordLength = Math.floor(Math.random() * (6 - 3)) + 3;
    for (var i = 0; i < wordLength; i++) {
        word += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return word;
}
// console.log(getWord());

