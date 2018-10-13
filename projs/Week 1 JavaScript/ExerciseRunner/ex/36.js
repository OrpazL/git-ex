// Write a function that gets a comma ',' delimited string that consists
// of names. Ex: 'igal,moshe,haim'
// and prints the longest name, and the shortest name.
// Tip: use the split function to covert a string to an array

console.log('Ex 36 Solution');

function namesCheck(str) {
    var names = str.split(',');
    var longestName = '';
    var shortestName = str;

    for (var i = 0; i < names.length; i++) {
        var currName = names[i];
        if (currName.length > longestName.length) longestName = currName;
        if (currName.length < shortestName.length) shortestName = currName;
    }
    console.log(names);
    console.log('Longest: ' + longestName);
    console.log('Shortest: ' + shortestName);

}

var str = 'igal,moshe,haim,bar';

//UNIT TEST
// var str = 'yuval,rocky,orpaz,loui,asaf,davidov,bar'; //==>Longest: davidov | Shortest: bar
// var str = 'igal,yarden,ben,moshe,haim,bar'; //==> Longest: yarden | Shortest: ben
// var str = 'igal,moshe,haim,baruh,shlomo'; //==> Longest: shlomo | Shortest: igal
namesCheck(str);

