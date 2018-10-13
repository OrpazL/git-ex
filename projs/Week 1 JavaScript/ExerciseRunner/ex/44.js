// Write a function printNumsCount(nums) the array nums contains
// integers in the range 0-3 such as:
// 3 2 0 2 2 0 3
// The function prints how many times each of these nums appear in array.
// GUIDANCE: the fact that the values are in a specific range allows us to use
// an array where the index is actually the number itself and the value in the
// array is the count 

console.log('Ex 44 Solution');

var nums = [3, 2, 0, 2, 2, 0, 3]
printNumsCount(nums);

function printNumsCount(nums) {
    var count0 = 0;
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;

    for (var i = 0; i < nums.length; i++) {
        switch (nums[i]) {
            case 0:
                count0++;
                break;
            case 1:
                count1++;
                break;
            case 2:
                count2++;
                break;
            case 3:
                count3++;
                break;
            default:
                console.log(nums[i] + ' is not a number between 0-3!');
        }
    }
    console.log('0: ' + count0);
    console.log('1: ' + count1);
    console.log('2: ' + count2);
    console.log('3: ' + count3);
}

// function 

function option2(nums) {
    var conuterArr = [0, 0, 0, 0];
    for (var i = 0; i < nums.length; i++) {
        switch (nums[i]) {
            case 0:
                conuterArr[0]++;
                break;
            case 1:
                conuterArr[1]++;
                break;
            case 2:
                conuterArr[2]++;
                break;
            case 3:
                conuterArr[3]++;
                break;
            default:
                console.log(nums[i] + ' is not a number between 0-3!');
        }
    }
    console.log(conuterArr);
}

