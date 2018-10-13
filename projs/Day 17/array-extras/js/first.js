// ARRAY FOREACH() , MAP() AND FILTER()

function page1ex1() {
    // • Write the function onlyOneWord(strs) – returns only those strings
    // with a single word (no spaces)

    var input = ['return', 'phrases', 'with one word'];
    var expected = ['return', 'phrases'];
    var actual = onlyOneWord(input);
    function onlyOneWord(strs) {
        var res = strs.filter(function(str) {
            return !str.includes(' ');
        });
        return res;
    }
    console.log('expected:', expected, ' actual:', actual);
}
// page1ex1();

function page1ex2() {
    // • Write the function reverseAll(strs) – gets an array of strings and
    // returns a new array containing string reversed

    var input = ['abc', 'xyz'];
    var expected = ['cba', 'zyx'];
    var actual = reverseAll(input);

    function reverseAll(strs) {
        var res = strs.map(function(str) {
            var arrStr = str.split('');
            arrStr = arrStr.reverse();
            return arrStr.join('');
        });
        return res;
    }

    console.log('expected:', expected, ' actual:', actual);
}
// page1ex2();

function page1ex3() {
    // TODO: change to map DONE
    // • Write the function capitalizeLongerThan5(strs) – gets an array of
    // strings and returns a new array in which strings that are longer than
    // 5 are capitalized (starts with uppercase)

    var input = ['abcdefg', 'xyz'];
    var expected = ['Abcdefg', 'xyz'];
    var actual = capitalizeLongerThan5(input);

    function capitalizeLongerThan5(strs) {
        return strs.map(function(str) {
            if (str.length > 5) {
                var strArr = str.split('');
                strArr[0] = strArr[0].toUpperCase();
                str = strArr.join('');
            }
            res.push(str);
        });
    }
    console.log('expected:', expected, ' actual:', actual);
}
// page1ex3();

function page1ex4() {
    // TODO: change to map DONE

    // • Write the function onlyVowels(strs) – gets an array of strings and
    // returns a new array containing only vowels from each string:

    var input = ['average', 'exceptional', 'amazing'];
    var expected = ['aeae', 'eeioa', 'aai'];
    var actual = onlyVowels(input);

    function onlyVowels(strs) {
        return strs.map(function(str) {
            var arrStr = str.split('');
            var node = arrStr.filter(function(letter) {
                switch (letter) {
                    case 'a':
                    case 'A':
                    case 'e':
                    case 'E':
                    case 'i':
                    case 'I':
                    case 'o':
                    case 'O':
                    case 'u':
                    case 'U':
                        return true;
                    default:
                        return false;
                }
            });
            res.push(node.join(''));
        });
    }
    console.log('expected:', expected, ' actual:', actual);
}
// page1ex4();

function page1ex5() {
    // • Write the function doubleMatrix(mat) – that doubles the numbers in
    // the matrix, maintaining the same structure

    var input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    var expected = [[2, 4, 6], [8, 10, 12], [14, 16, 18]];

    var actual = doubleMatrix(input);

    function doubleMatrix(mat) {
        var res = mat.map(function(arr) {
            var arrays = arr.map(function(node) {
                node *= 2;
                return node;
            });
            return arrays;
        });
        return res;
    }
    console.log('expected:', expected);
    console.log('actual:', actual);
}
// page1ex5();

// ARRAY.FIND AND ARRAY.FINDINDEX

function page1ex6() {
    // Managing an array of movies:
    // Write the following functions:
    // • findMovie(imdb) that return a movie, use it to output a link to that
    // movie (something like: https://www.imdb.com/title/tt0073052/ )
    // • findMovieIdxByImdb() that returns the movie's index, use it to splice
    // it out of the array

    var gMovies = [
        { imdb: 'tt0373889', name: 'Harry Potter' },
        { imdb: 'tt0000004', name: 'Un bon bock' },
        { imdb: 'tt0000003', name: 'Pauvre Pierrot' }
    ];

    console.log("IMDB: 'tt0373889' ==>", findMovie('tt0373889'));
    console.log("IMDB: 'tt0373889' Idx:", findMovieIdxByImdb('tt0373889'));

    function findMovie(imdb) {
        var selectedMovie = gMovies.find(function(movie) {
            return movie.imdb === imdb;
        });
        var link = `https://www.imdb.com/title/${selectedMovie.imdb}/`;
        return link;
    }

    function findMovieIdxByImdb(imdb) {
        var selectedMovieIdx = gMovies.findIndex(function(movie) {
            return movie.imdb === imdb;
        });
        return selectedMovieIdx;
    }
}
// page1ex6();

// ARRAY.EVERY AND ARRAY.SOME

function page1ex7() {
    // 1. Write a function allPassed(students) that gets an array of students
    // (name, grade) and returns true if they all passed (grade >= 70)

    var gStudents = [
        { name: 'miku', grade: 70 },
        { name: 'muki', grade: 80 },
        { name: 'cc', grade: 70 },
        { name: 'dd', grade: 100 }
    ];

    console.log('Did all the students passed?', allPassed(gStudents));

    function allPassed(students) {
        return students.every(function(student) {
            return student.grade >= 70;
        });
    }
}
// page1ex7();

function page1ex8() {
    // 2. Write a function isGameOn(players) that gets an array of players
    // (name,isAlive) and returns true if one of them is still alive

    var gPlayers = [
        { name: 'miku', isAlive: true },
        { name: 'muki', isAlive: false },
        { name: 'cc', isAlive: false },
        { name: 'dd', isAlive: false }
    ];

    console.log('Does anyone alive?', isGameOn(gPlayers));

    function isGameOn(players) {
        return players.some(function(player) {
            return player.isAlive;
        });
    }
}
// page1ex8();

function page1ex9() {
    // 3. Write a function isMatrix(arr2d) that gets a 2d array and validate
    // that it is a matrix (= all rows are of the same length)

    var gMat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    console.log('Does all the rows are the same length?', isMatrix(gMat));

    function isMatrix(arr2d) {
        return arr2d.every(function(arr) {
            return arr.length === arr2d[0].length;
        });
    }
}
// page1ex9();

function page1ex10() {
    // 4. Write a function isWide(arr2d) that gets a 2d array and check that
    // at least one of its rows has more than 5 column

    var g2DArr = [[1, 2, 3], [4, 5, 6, 5, 5], [7, 8, 9]];

    console.log(
        'Does at least one of its rows has more than 5 column?',
        isWide(g2DArr)
    );

    function isWide(arr2d) {
        return arr2d.some(function(arr) {
            return arr.length > 5;
        });
    }
}
// page1ex10();

function page1ex11() {
    // 5. Write the function positiveRowsOnly (mat) – return only the rows in
    // the matrix that have all positive integers

    var input = [[1, 10, -100], [2, -20, 200], [3, 30, 300]];
    var expected = [[3, 30, 300]];
    var actual = positiveRowsOnly(input);

    console.log('expected:', expected);
    console.log('actual:', actual);

    function positiveRowsOnly(mat) {
        var positiveMat = [];

        positiveMat = mat.filter(function(row) {
            return row.every(function(num) {
                return num >= 0;
            });
        });

        return positiveMat;
    }
}
// page1ex11();
