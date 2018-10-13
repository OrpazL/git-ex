// Write a function findMode(mat) that will find and print the number
// that occurs most times in a 2d array.
// BONUS: If there are ties (e.g.: both 47 and 53 appeared 17 times),
// print all (TIP: use an object as a coutMap)

console.log('Ex 57 Solution');


function findMode(mat) {
    var matMap = {};
    var maxOccursCount = 0;
    var mostOccursCells = [];

    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[i].length; j++) {
            var currCell = mat[i][j];
            if (matMap[currCell]) matMap[currCell]++;
            else matMap[currCell] = 1;

            if (matMap[currCell] > maxOccursCount) {
                maxOccursCount = matMap[currCell];
                mostOccursCells = [currCell];
            } else if (matMap[currCell] === maxOccursCount) {
                mostOccursCells.push(currCell);
            }
        }
    }
    console.log('Most Occurs Cells: ',mostOccursCells , 'Occured count: ' , maxOccursCount);
    return {
        mostOccursCells: mostOccursCells,
        occuredCount: maxOccursCount
    };
}

var mat = [
    [1, 1, 2, 4, 5, 6, 7, 8, 9],
    [2, 2, 4, 5, 6, 7, 8, 9, 1],
    [3, 3, 5, 6, 7, 8, 9, 1, 2],
    [4, 4, 6, 7, 8, 9, 1, 2, 3]
];
console.table(mat);

console.log(findMode(mat));