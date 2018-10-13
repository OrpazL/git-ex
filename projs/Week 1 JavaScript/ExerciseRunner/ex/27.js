// Asterisks!
// a) Write a function getAsterisks(length) that returns a string containing
// asterisks according the number supplied.
// for example: when the requested length is 4, it returns '****'
// Copyright 2018 © misterBIT
// b) Write a function: drawTriangle(height) that prints a triangle:
// (the requested height here is 4)
// Hint: use the function getAsterisks in a loop.
// c) Write a function: drawMusicEqualizer(rowsCount) that generate
// random numbers between 1 and 10 and draws '#' rows at random
// lengths:
// *****
// **
// ***
// ***
// d) Write a function that prints a block of asterisks (*) by parameters:
// rows, cols
// ex: for 4,5.
// *****
// *****
// *****
// *****
// Now, print only the outline
// *****
// * *
// * *
// *****
// e) Surprise, there is a new requirement to support any character (not
// necessarily asterisk), how easy it is to refactor your code so that the
// character will be decided by the user and the code will still make sense?

'use strict';

console.log('Ex 27 Solution');

var length = +prompt('Enter length: ');

// e)
var char = prompt('Enter the repetitive char: ');


// a)
console.log('\na)');
function getAsterisks(length) {
    var result = '';
    for (var i = 0; i < length; i++) {
        result += char;
    }
    return result;
}
console.log(getAsterisks(length));

// b)
console.log('\nb)');
function drawTriangle(height) {
    for (var i = 0; i < height; i++) {
        console.log(getAsterisks(i));
    }
    for (var i = height; i > 0; i--) {
        console.log(getAsterisks(i));
    }
}
drawTriangle(length);

// c)
console.log('\nc)');
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function drawMusicEqualizer(rowsCount) {
    for (var i = 0; i < rowsCount; i++) {
        console.log(getAsterisks(getRandomInteger(1, 10)));
    }
}
drawMusicEqualizer(length);

// d)
console.log('\nd)');
function blockOfAsterisks(rows, cols) {
    for (var i = 0; i < rows; i++) {
        if (i !== 0 && i !== rows - 1) {
            brokenLine(length);
        } else {
            console.log(getAsterisks(cols));
        }
    }
}
blockOfAsterisks(length, length);

function brokenLine(length) {
    var result = char;
    for (var i = 1; i < length - 1; i++) {
        result += ' ';
    }
    result += char;
    console.log(result);
}
