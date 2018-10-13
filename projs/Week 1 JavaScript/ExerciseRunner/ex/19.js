// Read 10 numbers from the users and output "the number is even" if this is
// the case, else "the number is not even"

'use strict';

console.log('Ex 19 Solution');

function oddOrEven() {

    for (var i = 0; i < 10; i++) {
        var num = +prompt('Enter num: ');
        if (num % 2 === 0) {
            console.log(num + ' is even.');
        } else console.log(num + ' is odd.');
    }
}
oddOrEven();