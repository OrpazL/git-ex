// Write a function: multBy(nums, multiplier) that returns a modified array
// in which each item in the array is multiplied by myltiplier.
// a. Add another param: isImmutable, when true use array.slice() to work
// on a new array and leave the original array as is.

console.log('Ex 46 Solution');


var nums = [5, 4, 5, 7, 1, 9, 4, 8, 2, 3];
var isImmutable = confirm('modify original array?');

console.log(multBy(nums, 10, isImmutable));

function multBy(nums, multiplier, isImmutable) {
    var arr = (!isImmutable) ? nums.slice() : nums;
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= multiplier;
    }
    return arr;
}