// Ask the user how many friends he has on FB and print out an analysis:
// o More than 500 – OMG, celebrity!
// o More than 300 (and up to 500) – Well connected!
// o 100 and more – Knows some people
// o Up to 100 – Quite picky aren't you?
// o 0 – Lets be friends?


console.log('Ex 10 Solution');

//initialize variables
var fbFriends = +prompt('How many friends do you have on FB?');

//conditions + output
if(fbFriends > 500) {
    console.log('OMG, celebrity!');
} else if (fbFriends > 300) {
    console.log('Well connected!');
} else if (fbFriends >= 100) {
    console.log('Knows some people');
} else if(fbFriends > 0) {
    console.log('Quite picky aren\'t you?');
} else if (fbFriends === 0) {
    console.log('Lets be friends?');  
} else {
    console.log('Please be realistic..');
}