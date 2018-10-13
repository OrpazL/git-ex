'use strict';
// Write a function sumArrays that gets 2 arrays and returns a sum array:
// a. For example, for: [1, 4, 3] [2, 5, 1, 9] it returns: [3, 9, 4, 9]
// TIP: this can be done in a single loop by first identifying the big and
// small arrays.
// b. Read those arrays from the user (until 999 is entered)
// TIP: write a function: getArrayFromUser and call it twice


console.log('Ex 43 Solution');

console.log('set arr1');
var arr1 = getArrayFromUser();
console.log('set arr2');
var arr2 = getArrayFromUser();

console.log('Sum array: ' + sumArrays(arr1, arr2));

function sumArrays(arr1, arr2) {
    var shortArr = (arr1.length > arr2.length) ? arr2 : arr1;
    var longArr = (arr1.length < arr2.length) ? arr2 : arr1;
    var sumArr = [];
    for (var i = 0; i < longArr.length; i++) {
        sumArr.push(longArr[i] + (shortArr[i] || 0));
    }
    // var sumArr = longArr.slice();
    // for (var i = 0 ; i < shortArr.length ; i++) {
    //     sumArr[i] += shortArr[i];
    // }
    return sumArr;
}


function getArrayFromUser() {
    var arr = [];
    var idx = prompt('Enter index for arr: \n(999 to exit)');
    while (idx !== '999') {
        (isNaN(+idx)) ? arr.push(idx) : arr.push(+idx);
        idx = prompt('Enter index for arr: \n(999 to exit)');
    }
    return arr;
}