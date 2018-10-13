// Write a function: isOfAge that gets a name and an age, it the user is younger
// than eighteen, alert him that he is too young, this function also returns a
// boolean

console.log('Ex 18 Solution');

function isOfAge(name, age) {
    if (age < 18) {
        console.log(name + ', you are too young!');
        return false;
    }
    console.log('On age.');
    return true;
}

var userName = prompt('Enter your name:');
var userAge = +prompt('Enter your age:');

console.log(isOfAge(userName, userAge));
