// Read 10 numbers and print:
// o The maximum number
// o The minimum number
// o The average

'use strict';

console.log('Ex 20 Solution');

function ex20() {

    //initialize variables
    const NUM_COUNT = 10;
    var max = -Infinity;
    var min = Infinity;
    var sum = 0;

    // loop
    for (var i = 0; i < NUM_COUNT; i++) {
        var num = +prompt('Enter num:');
        if (num > max) max = num;
        if (num < min) min = num;
        sum += num;
    }

    var avg = sum / NUM_COUNT;

    // output
    console.log('Max: ' + max);
    console.log('Min: ' + min);
    console.log('Avg: ' + avg);
}
ex20();    