// Read a number and
// a) Calculate sum of its digits.
// b) Calculate multiply of its digits.
// c) Print it with swapped first and last digits (2731 => 1732)
// d) Check if its symmetric (such as: 95459)
// e) Print its reverse (BONUS: as number not as string).
// f) Sum its first and last digit.
// g) Print if it's an Armstrong number.
// i.e. 371 is an Armstrong number:
// 3
// 3 + 7
// 3 + 1
// 3 = 371
// h) Print if it's a perfect number.
// Perfect number is a number that the sum of all its dividers is the number
// itself.
// i.e. 6 is a perfect number (1 + 2 + 3).
// Now read a number: max and prints all Armstorng and Perfect positive
// numbers until max

'use strict';

console.log('Ex 29 Solution');

var strNum = prompt('Enter num: ');
var num = +strNum;
// var div = 10 ** (strNum.length - 1);

// var max = prompt('Enter max number to check armstrong and perfect numbers: ');

function sumOfDigits(num) {
    var sum = 0;
    while (num >= 1) {
        sum += num % 10;
        num = parseInt(num / 10);
    }
    console.log('Sum: ' + sum);
}

function multiplyOfDigits(num) {
    var mult = 1;
    while (num >= 1) {
        mult *= num % 10;
        num = parseInt(num / 10);
    }
    console.log('Mult: ' + mult);
}
// multiplyOfDigits(num);

function swapFirstLast(num) {
    var div = 10 ** (strNum.length - 1);
    var lastDigit;
    var firstDigit;
    firstDigit = parseInt(num / div)
    lastDigit = num % 10;

    num -= lastDigit;
    num -= firstDigit * div;
    num += lastDigit * div;
    num += firstDigit;

    console.log('Swapped first and last digits: ' + num);
}
// swapFirstLast(num);

function isSymmetric(num) {
    var div = 10 ** (strNum.length - 1);
    var isNumSymmetric = true;
    var temp = num;
    while (isNumSymmetric && num > 9) {
        // console.log('Num is:', num);

        var rightDigit = num % 10;
        var leftDigit = parseInt(num / div);

        // console.log('Right Digit', rightDigit);
        // console.log('Left Digit', leftDigit);

        if (leftDigit !== rightDigit) {
            isNumSymmetric = false;
        }

        // Cut first and last digits from the num
        num = num % div;
        num = parseInt(num / 10);

        div /= 100;
    }

    if (isNumSymmetric) {
        console.log(temp + ' is symmetric.');
        return true;
    } else {
        console.log(temp + ' isn\'t symmetric.');
        return false;
    }
}
// isSymmetric(num);

function reverseDigits(num) {
    var digits = [];
    for (var i = 0; i < strNum.length; i++) {
        digits[i] = num % 10;
        num = parseInt(num / 10);
    }
    var reversed = digits.join('');
    reversed = +reversed;
    console.log('Reversed: ' + reversed);
}
// reverseDigits(num);

function sumFirstLast(num) {
    var lastDigit;
    var firstDigit;
    firstDigit = parseInt(num / div);
    lastDigit = num % 10;
    var sum = firstDigit + lastDigit;
    console.log('Sum of first and last digit: ' + sum);
}
// sumFirstLast(num);

function isArmstorngNum(num) {
    // var digits = [];
    // var temp = num;
    // for (var i = 0; i < strNum.length; i++) {
    //     digits[i] = num % 10;
    //     num = parseInt(num / 10);
    // }
    // var sumOfPows = 0;
    // for (var i = 0; i < digits.length; i++) {
    //     sumOfPows += digits[i] ** strNum.length;
    // }
    // if (temp === sumOfPows) {
    //     console.log(temp + ' is an Armstrong number!');
    // }

    var temp = num;
    var sumOfPows = 0;
    while (num >= 1) {
        sumOfPows += (num % 10) ** strNum.length;
        num = parseInt(num / 10);
    }
    if (temp === sumOfPows) {
        console.log(temp + ' is an Armstrong number!');
    }
}
// isArmstorngNum(num);

function isPerfectNum(num) {
    // var dividers = [];
    // var isPerfect = false;
    // for (var i = 0; i < num; i++) {
    //     if (num % i === 0) {
    //         dividers.push(i);
    //     }
    // }
    // var sum = 0;
    // for (var i = 0; i < dividers.length; i++) {
    //     sum += dividers[i];
    // }
    // if (sum === num) {
    //     isPerfect = true;
    // }
    // if (isPerfect) {
    //     console.log(num + ' is a perfect number!');
    // }

    var sumOfDividers = 0;
    var isPerfect = false;
    for (var i = 0; i < num; i++) {
        if (num % i === 0) {
            sumOfDividers += i;
        }
    }
    if (sumOfDividers === num) {
        isPerfect = true;
    }
    if (isPerfect) {
        console.log(num + ' is a perfect number!');
    }
}

function checkUntilMax(max) {
    for (var i = 0; i < max; i++) {
        isArmstorngNum(i);
        isPerfectNum(i);
    }
}


//UNIT TEST
//  sumOfDigits(545);//14
//  multiplyOfDigits(123) // 6
//  swapFirstLast(num) // 2345  ==> 5342

//  isSymmetric(num) //

//  sumFirstLast(num)// 123 ==> 4

isArmstorngNum(num) // 371 ==> true; 

// isPerfectNum(496) //true

// checkUntilMax(max);
// isPerfectNum(num);