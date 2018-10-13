// Making Water! Let's imagine that we have the following atoms:
// 1 Hydrogen H
// 5 Boron B
// 6 Carbon C
// 7 Nitrogen N
// 8 Oxygen O
// 9 Fluorine F
// o Represent that in an array with just the atom symbol
// o Pick random atoms from an array to create molecules of 3
// atoms
// o Stop when you get water (H2O – Two Hydrogens and one
// Oxygen)
// o Print how many molecules you had to try before randomly
// creating water

console.log('Ex 50 Solution');

function getWordInArray() {
    var word = '';
    var possible = ['H', 'B', 'C', 'N', 'O', 'F'];
    var wordLength = 3;

    for (var i = 0; i < wordLength; i++) {
        word += possible[(Math.floor(Math.random() * possible.length))];
    }
    return word;
}

function countTries() {

    var count = 0;
    var word = getWordInArray();
    while (word !== 'HHO' && word !== 'HOH' && word !== 'OHH') {
        count++;
        word = getWordInArray();
    }
    console.log('count: ' + count);
    console.log('Water: ', word.split(''));
}

countTries();