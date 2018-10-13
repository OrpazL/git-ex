// Object as a Map - Write a function countWordApperances(txt) that
// return a map (object) in which the key is a word and the value is the
// count (how many times this word appeared in the text)

console.log('Ex 51 Solution');

var strTxt = createTxt();
countWordApperances(seperateToWords(strTxt));

function countWordApperances(words) {
    var txtMap = {};
    
    for (var i = 0 ; i < words.length ; i++) {
        var currWord = words[i];
        if (txtMap[currWord]) txtMap[currWord]++;
        else txtMap[currWord] = 1;
    }
    
    var word = prompt('Enter word to check: ');
    for (var wordy in txtMap) {
        var wordsAppearanceCount = txtMap[wordy];
        // console.log('The word: ', word, 'Count: ', wordsAppearanceCount);
        if (wordy === word) console.log('The word: ' , word , 'Count: ', wordsAppearanceCount);
    }
}

function createTxt() {
    var txt = 'Initially only implemented client-side in web browsers, JavaScript engines are now embedded in many other types of host software, including server-side in web servers and databases, and in non-web programs such as word processors and PDF software, and in runtime environments that make JavaScript available for writing mobile and desktop applications, including desktop widgets.';
    return txt;
}
function seperateToWords(str) {
    return str.split(' ');
}
