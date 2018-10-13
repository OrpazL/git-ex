// The Elevator –
// o Keep a currentFloor variable, initialize it to 0
// o Ask the user which floor he needs
// o Validate its between -2 and 4
// o Update the currentFloor variable accordingly
// o And let the use know his current floor
// o If the user goes to floor 0 add 'Bye Bye'
// o If the user goes to parking (negative floors) add: 'Drive Safely'

console.log('Ex 13 Solution');

//initialize variables
var currentFloor = 0;
var floorNeeded = +prompt('What floor do you need? ');


if (floorNeeded >= -2 && floorNeeded <= 4) {
    currentFloor = floorNeeded;
    if (floorNeeded === 0) {
        console.log('Current Floor: ' + currentFloor + '\nBye Bye');
    } else if (floorNeeded < 0) {
        console.log('Current Floor: ' + currentFloor + '\nDrive Safely');
    } else {
        console.log('Current Floor: ' + currentFloor);
    }
} else {
    console.log('There isn\'t ' + floorNeeded + ' floor!');
}

