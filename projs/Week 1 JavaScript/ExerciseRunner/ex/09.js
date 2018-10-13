// Read 2 positive numbers and calculate the difference (absolute value)
// o If the diff is smaller from both values say that those numbers
// are relatively-close (i.e. – num1=5, num2=9 then diff=4 => relatively-close!)
// o Validate that you got numbers
// (hint: search for something like: javascript check if number)

console.log('Ex 09 Solution');

//initialize variables
var num1 = +prompt('Enter first num: ');
var num2 = +prompt('Enter second num: ');
if (!isNaN(num1) && !isNaN(num2)) {
    var absDiff = Math.abs(num1 - num2);
    
    //check if relatively-close
    if (absDiff < num1 && absDiff < num2) {
        console.log('Difference relatively-close!: ' + absDiff);
    } else {
        console.log('Difference not relatively-close: ' + absDiff);
    }
} else {
    console.log('One of the numbers is invalid!');
}
