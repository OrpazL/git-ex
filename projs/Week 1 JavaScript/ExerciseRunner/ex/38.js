// Write a function biggerThan100 that gets an array of nums and returns
// an array of items that are bigger than 100.

console.log('Ex 38 Solution');

function biggerThan100(nums) {
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (num > 100) {
            res.push(num);
        }
    }
    return res;
}

var arrOfNums = [100, 200, 300, 400, 10, 20, 30, 40];
console.log('All of the nums which are bigger than 100: ' + biggerThan100(arrOfNums));