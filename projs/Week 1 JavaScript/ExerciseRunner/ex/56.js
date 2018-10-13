// Symmetric Matrix
// A symmetric matrix is one that follow the rule: mat[i][j] === mat[j][i]
// Write the function isSymmetric(mat)

console.log('Ex 56 Solution');

var mat = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [4, 5, 6, 7, 8, 9, 1, 2, 3]
];

console.log('is symmetric?', isSymmetric(mat));

function isSymmetric(mat) {
    // debugger;
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[i].length; j++) {
            if (!(mat[j])) return false;
            if (!(mat[i][j] === mat[j][i])) return false;
        }
    }
    return true;
}