// Write a function: findUniques(nums) the array nums contains
// numbers in the range 0 -10 such as:
// 5 4 5 7 1 9 4
// the function returns a new array where each value appear only
// once.
// TIP: Notice that the values are in a specific range 

console.log('Ex 45 Solution');


var nums = [5, 4, 5, 7, 1, 9, 4, 8, 2, 3];
console.log(findUniques(nums));

function findUniques(nums) {
    var exists = '';
    for (var i = 0; i < nums.length; i++) {
        var currNum = nums[i];
        if (exists.indexOf(currNum) >= 0) {
            nums.splice(i, 0);
        } else {
            exists += currNum;
        }
    }
    exists = exists.split('');
    // console.log(excists);
    return exists;
}