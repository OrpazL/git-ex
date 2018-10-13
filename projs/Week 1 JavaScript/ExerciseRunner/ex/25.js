// Write A function getRandomInteger(min, max) get that generates a random
// integer between min and max.
// Hint: Use Math.Random & Math.Floor
// a) After you're played with it enough (or done), read this page. And
// look at the getRandomInt function.
// b) Yes, it's better, now copy that function and remember to use it
// whenever you need in later exercises (how amazing is that?)

'use strict';

console.log('Ex 25 Solution');

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var max = +prompt('Enter max: ');
var min = +prompt('Enter min: ');

console.log('Random: ' + getRandomInteger(min, max));