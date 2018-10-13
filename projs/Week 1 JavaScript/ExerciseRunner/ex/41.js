// Write a function sayNum(num) that prints each digit in words.
// For example:
// 123 => One Two Three.
// 7294 => Seven Two Nine Four
// TIP: You may use Switch inside a loop OR an array digitNames.
// What the heck, try them both.

console.log('Ex 41 Solution');

function sayNumStr(num) {
    var strNum = num + '';
    num += '';
    var res = '';
    // console.log(strNum.length);
    for (var i = 0; i < num.length; i++) {
        // console.log(+strNum.charAt(i));
        switch (+strNum.charAt(i)) {
            case 1:
                res += 'One';
                break;
            case 2:
                res += 'Two';
                break;
            case 3:
                res += 'Three';
                break;
            case 4:
                res += 'Four';
                break;
            case 5:
                res += 'Five';
                break;
            case 6:
                res += 'Six';
                break;
            case 7:
                res += 'Seven';
                break;
            case 8:
                res += 'Eight';
                break;
            case 9:
                res += 'Nine';
                break;
            case 0:
                res += 'Zero';
                break;
            default:
                console.log(strNum.charAt(i) + ' is NaN !');
        }
        res += ' ';
    }
    return res;
}

function sayNumArray(num) {
    var digitNames = num.split('');
    console.log(digitNames);
    for (var i = 0; i < digitNames.length; i++) {
        // console.log(+digitNames[i]);
        switch (+digitNames[i]) {
            case 1:
                digitNames[i] = 'One';
                break;
            case 2:
                digitNames[i] = 'Two';
                break;
            case 3:
                digitNames[i] = 'Three';
                break;
            case 4:
                digitNames[i] = 'Four';
                break;
            case 5:
                digitNames[i] = 'Five';
                break;
            case 6:
                digitNames[i] = 'Six';
                break;
            case 7:
                digitNames[i] = 'Seven';
                break;
            case 8:
                digitNames[i] = 'Eight';
                break;
            case 9:
                digitNames[i] = 'Nine';
                break;
            case 0:
                digitNames[i] = 'Zero';
                break;
            default:
                console.log(digitNames[i] + ' is NaN !');
        }
    }
    return digitNames;
}

var num = prompt('Enter num: ');
console.log('Digits name string: ' + sayNumStr(num));
console.log('Digits name array: ' + sayNumArray(num).join(' '));


