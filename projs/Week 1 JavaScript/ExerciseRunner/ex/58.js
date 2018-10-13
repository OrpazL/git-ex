// Write a function that gets a 2d array and checks if it is a magic
// square:
//  • it must be square, 
//  • Rows' sums, columns' sums, and the two diagonals sums
//    should be equal.

console.log('Ex 58 Solution');

function isMagicSquare(mat) {

    //Make sure the mat is a square
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[i].length; j++) {
            if (mat.length !== mat[i].length) return false;
        }
    }

    //check sum
    var sum = 0;
    for (var i = 0; i < mat.length; i++) {
        sum += mat[i][0];
    }

    //check rows
    for (var i = 0; i < mat.length; i++) {
        var currRowSum = 0;
        for (var j = 0; j < mat[i].length; j++) {
            currRowSum += mat[i][j];
        }
        if (currRowSum !== sum) return false;
    }

    //check cols
    for (var i = 0; i < mat.length; i++) {
        var currColSum = 0;
        for (var j = 0; j < mat[i].length; j++) {
            currColSum += mat[i][j];
        }
        if (currColSum !== sum) return false;
    }

    //check diagonals
    var diagonalSum = 0;
    for (var i = 0; i < mat.length; i++) {
        diagonalSum += mat[i][i];
    }
    if (diagonalSum !== sum) return false;

    diagonalSum = 0;
    for (var i = 0; i < mat.length; i++) {
        diagonalSum += mat[i][mat.length - i - 1];
    }
    if (diagonalSum !== sum) return false;

    return true;
}

var mat = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

console.table(mat);
console.log('is magic square? ' , isMagicSquare(mat));