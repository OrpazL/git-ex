// Write a function getNthLargest() to get nth largest element from an array
// of unique nums.
// For example: nthlargest([ 7, 56, 23, 89, 88, 92, 99, 11], 4)
// Result: 88
// o If we sort the array, its easy
// o BONUS: Try without sorting the array!

console.log('Ex 48 Solution');



var nums = [7, 56, 23, 89, 88, 92, 99, 11];

function getNthLargest(nums, n) {
    var res;
    if (n > nums.length) {
        console.log('n cannot be bigger than the length of the array!');
        return;
    }
    res = nums.slice();
    // debugger;


    for (var i = 0; i < n; i++) {
        var max = -Infinity;
        var maxIdx;
        for (var j = 0; j < res.length; j++) {
            if (res[j] > max) {
                max = res[j];
                maxIdx = j;
            }
        }
        res.splice(maxIdx, 1);
    }
    return max;
}

console.log('Max 4: ' , getNthLargest(nums, 4));
