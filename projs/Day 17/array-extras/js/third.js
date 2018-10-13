function page3ex1() {
    // 1. What is the result of the following code? Explain your answer.

    function printing() {
        console.log(1);
        setTimeout(function() {
            console.log(2);
        }, 1000);
        setTimeout(function() {
            console.log(3);
        }, 0);
        console.log(4);
    }
    printing();
    // EXPECTING 1 4 3 2
    // 1 הוא הראשון שיוצא ללוג כי הוא הפקודה הראשונה ללא דיליי
    // 4 כי הוא הפקודה הבאה ללא דיליי / השהייה
    // 3 כי הוא הפקודה בעלת ההשהייה הקטנה ביותר
    // 2 האחרון שנשאר
}
// page3ex1();

function page3ex2() {
    // 2. What will be the output of the following code, fix it to work as
    // expected
    function getPrintFunc(n) {
        return function() {
            console.log(n);
        };
    }
    for (var i = 0; i < 5; i++) {
        setTimeout(getPrintFunc(i), i * 1000);
    }
}
// page3ex2();

function page3ex3() {
    // 3. Use closure to keep track of how many times button was clicked,
    // do not use global variables

    function init() {
        var counter = 0;
        var elBtn = document.querySelector('button');
        elBtn.onclick = add;
        function add() {
            counter += 1;
            console.log(counter);
            elBtn.innerHTML = `CLICK ${counter}`;
        }
    }
    init();
}
// page3ex3();

function page3ex4() {
    // 4. Write the function multBY

    function multBy(n1) {
        return function(n2) {
            return n1 * n2;
        };
    }

    var multBy4 = multBy(4);
    console.log(multBy4(2)); // Should print 8
}
// page3ex4();

function page3ex5() {
    // 5. Write a mul function which will produce the
    //    following outputs when invoked:

    function mul(x) {
        return function(y) {
            return function(z) {
                return x * y * z;
            };
        };
    }

    console.log(mul(2)(3)(4)); // output : 24
    console.log(mul(4)(3)(4)); // output : 48
}
// page3ex5();
