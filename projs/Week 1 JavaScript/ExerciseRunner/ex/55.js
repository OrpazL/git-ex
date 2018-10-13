// Fill up a 2d array with numbers
// Create the following functions:
// • sumCol(mat, colIdx)
// • sumRow(mat, rowIdx)
// • findMax(mat ,colIdx)
// • findAvg(mat)
// • sumArea(mat, rowIdxStart, rowIdxEnd, coldxStart, colIdxEnd)

console.log('Ex 55 Solution');

var mat = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 4, 5, 6, 7, 8, 9],
    [3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9]
];

function sumRow(mat, rowIdx) {
    var sum = 0;
    for (var i = 0; i < mat[rowIdx].length; i++) {
        sum += mat[rowIdx][i];
    }
    return sum;
}

function sumCol(mat, colIdx) {
    var sum = 0;
    for (var i = 0; i < mat.length; i++) {
        (mat[i][colIdx]) ? sum += mat[i][colIdx] : sum += 0;
    }
    return sum;
}

function findMax(mat, colIdx) {
    // TODO: column it
    var max = -Infinity;
    for (var i = 0; i < mat[colIdx].length; i++) {
        (mat[colIdx][i] > max) ? max = mat[colIdx][i] : max += 0;
    }
    return max;
}

function findAvg(mat) {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[i].length; j++) {
            sum += mat[i][j];
            count++;
        }
    }
    return sum / count;
}

function sumArea(mat, rowIdxStart, rowIdxEnd, coldxStart, colIdxEnd) {
    var sum = 0;
    for (var i = rowIdxStart; i <= rowIdxEnd; i++) {
        for (var j = coldxStart; j <= colIdxEnd; j++) {
            sum += mat[i][j];
        }
    }
    return sum;
}


console.table(mat)
console.log('Sum area: ' , sumArea(mat, 0, 2, 0, 3)); 

console.log('Avg: ' , findAvg(mat)); // expecting 5.667 ==> got 5.666666666666667

console.log('Max: ', findMax(mat, 2)); // expecting 9 ==> got 9

console.log('Sum row: ', sumCol(mat, 8)); // expecting 9 ==> got 9

console.log('Sum col: ', sumRow(mat, 0)); // expecting 45 ==> got 45