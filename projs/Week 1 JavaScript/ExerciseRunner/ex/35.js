// Write the function encrypt that gets a string and encrypts it by
// replacing each character c with c+5 (i.e. 'r' will be replaced by: 'w').
// NOTE: The function should encrypt the entire string by shifting each letter
// as described above.
// Now write a function decrypt that decrypts a message.
// Tip: try in the console: 'ABC'.charCodeAt(0)

console.log('Ex 35 Solution');

var str = prompt('Enter string: ');
console.log('Origin str:'+ str +' Encrypted:'+ encryptStr(str));
console.log('Encrypted str:'+ encryptStr(str) +' Decrypted:'+ decryptStr(encryptStr(str)));

function decryptStr(str) {
    var res = '';
    var temp = '';
    for (var i = 0; i < str.length; i++) {
        if (isFirstFive(str.charAt(i))) {
            temp = decryptLastFive(str.charAt(i));
        } else {
            temp = str.charCodeAt(i) - 5 + ' ';
        }
        res += String.fromCharCode(temp);
    }
    // console.log(str1);
    return res;
}

function encryptStr(str) {
    var res = '';
    var temp = '';
    for (var i = 0; i < str.length; i++) {
        if (isLastFive(str.charAt(i))) {
            temp = encryptLastFive(str.charAt(i));
        } else {
            temp = str.charCodeAt(i) + 5 + ' ';
        }
        res += String.fromCharCode(temp);
    }
    // console.log(res);
    return res;
}

function isLastFive(char) {
    switch (char) {
        case 'v':
        case 'V':
        case 'w':
        case 'W':
        case 'x':
        case 'X':
        case 'y':
        case 'Y':
        case 'z':
        case 'Z':
            return true;
        default:
            return false;
    }
}

function isFirstFive(char) {
    switch (char) {
        case 'a':
        case 'A':
        case 'b':
        case 'B':
        case 'c':
        case 'C':
        case 'd':
        case 'D':
        case 'e':
        case 'E':
            return true;
        default:
            return false;
    }
}

function encryptLastFive(char) {
    switch (char) {
        case 'v':
            return 'a'.charCodeAt();
        case 'V':
            return 'A'.charCodeAt();
        case 'w':
            return 'b'.charCodeAt();
        case 'W':
            return 'B'.charCodeAt();
        case 'x':
            return 'c'.charCodeAt();
        case 'X':
            return 'C'.charCodeAt();
        case 'y':
            return 'd'.charCodeAt();
        case 'Y':
            return 'D'.charCodeAt();
        case 'z':
            return 'e'.charCodeAt();
        case 'Z':
            return 'E'.charCodeAt();
    }
}

function decryptLastFive(char) {
    switch (char) {
        case 'a':
            return 'v'.charCodeAt();
        case 'A':
            return 'V'.charCodeAt();
        case 'b':
            return 'w'.charCodeAt();
        case 'B':
            return 'W'.charCodeAt();
        case 'c':
            return 'x'.charCodeAt();
        case 'C':
            return 'X'.charCodeAt();
        case 'd':
            return 'y'.charCodeAt();
        case 'D':
            return 'Y'.charCodeAt();
        case 'e':
            return 'z'.charCodeAt();
        case 'E':
            return 'Z'.charCodeAt();
    }
}

