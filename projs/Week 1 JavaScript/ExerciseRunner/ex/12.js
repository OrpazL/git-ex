// Guess Who
// o Alert the user to think about some actor
// o Using the confirm function, ask the user 2 yes-no questions:
// ▪ Question 1: Male?
// ● Yes:
// o Question 2: Blonde?
// ▪ Yes: Philip Seymour!
// ▪ No: Tom Cruise!
// ● No:
// o Question 2: English?
// ▪ Yes: Keira Knightley!
// ▪ No: Natalie Portman!


console.log('Ex 12 Solution');

alert('think about some actor');
if(confirm('Male?')) {
    if (confirm('Blonde?')) {
        console.log('Philip Seymour!');
    } else {
        console.log('Tom Cruise!');
    }
} else if (confirm('English?')) {
    console.log('Keira Knightley!');
} else {
    console.log('Natalie Portman!');
}