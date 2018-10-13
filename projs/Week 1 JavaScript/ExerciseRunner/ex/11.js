// Rolling Project: BankSystem
// a) Initialize a variable: currBalance with the value: 1000
// b) prompt for the user secret pin code and how much he would
// like to withdraw, and then print a nice message with the new
// balance.
// o Check that the secret pin code is '0796', if not, tell the user its
// wrong and don’t let him withdraw
// o Add feature: don’t let the user withdraw more than he has in
// the account

console.log('Ex 11 Solution');

//initialize variables
var currBalance = 1000;
var pinCode = prompt('Enter PIN code: ');

//check if PIN code is correct
if (pinCode === '0796') {
    var withdraw = +prompt('How much do you want to withdraw? ');

    //check if there is enough balance for withdraw
    if (currBalance - withdraw >= 0) {
        currBalance -= withdraw;
        console.log('Done!\nNew balance: ' + currBalance);
    } else {
        console.log('Over Limit!\nNothing done.\nCurrent Balance: ' + currBalance);
    }
} else {
    console.log('Wrong PIN code!');
}