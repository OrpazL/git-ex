// Write a function countVotes(votes, candidateName) that counts how
// many votes this candidate got.
// i.e.: if the votes array looks like this: ['c1', 'c1', 'c2', 'c1']
// And the candidateName is : 'c2', the function returns 1.

console.log('Ex 39 Solution');

function countVotes(votes, candidateName) {
    var count = 0;
    for (var i = 0; i < votes.length; i++) {
        if (votes[i] === candidateName) count++;
    }
    return count;
}


var votes = [];
// initialize array
var candidate = prompt('Enter candidate name stop with empty input: ');
while (candidate.length > 1) {
    votes.push(candidate);
    candidate = prompt('Enter candidate name stop with empty input: ');
}
var candidateName = prompt('Enter the name of candidate to see how many votes he got:');
console.log(candidateName + ' has got ' + countVotes(votes, candidateName) + ' votes!');