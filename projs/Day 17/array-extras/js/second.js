function page2ex1() {
    // 1. Consider the following data structure:

    var emps = [
        {
            name: 'Joe Schmoe',
            yearsExperience: 1,
            department: 'IT'
        },
        {
            name: 'Sally Sallerson',
            yearsExperience: 15,
            department: 'Engineering'
        },
        {
            name: 'Bill Billson',
            yearsExperience: 5,
            department: 'Engineering'
        },
        {
            name: 'Jane Janet',
            yearsExperience: 11,
            department: 'Management'
        },
        {
            name: 'Bob Hope',
            yearsExperience: 9,
            department: 'IT'
        }
    ];

    // ALL EXPERIENCE SUM

    var allExperienceSum = emps.reduce(function(acc, currEmp) {
        return acc + currEmp.yearsExperience;
    }, 0);

    console.log('All experience sum is', allExperienceSum);

    // SUM EACH DEPARTMENT'S COLLECTIVE EXPERIENCE

    var departmentsExperienceMap = emps.reduce(function(acc, currEmp) {
        if (acc[currEmp.department])
            acc[currEmp.department] += currEmp.yearsExperience;
        else acc[currEmp.department] = currEmp.yearsExperience;
        return acc;
    }, {});

    console.log('departmentsExperienceMap:', departmentsExperienceMap);

    // TODO: make it work DONE
    // GROUP EMPLOYEES BY EXPERIENCE (AN OBJECT IN WHICH THE KEY IS A
    // NUMBER AND THE VALUE IS AN ARRAY OF EMPLOYEE OBJECTS)

    var employeesByExperienceMap = emps.reduce(function(acc, currEmp) {
        if (acc[currEmp.yearsExperience])
            acc[currEmp.yearsExperience].push(currEmp);
        else acc[currEmp.yearsExperience] = [currEmp];
        return acc;
    }, {});

    console.log('employeesByExperienceMap:', employeesByExperienceMap);

    // COUNT THE NUMBER OF EMPLOYEES IN EACH DEPARTMENT

    var departmentsEmployeesMap = emps.reduce(function(acc, currEmp) {
        if (acc[currEmp.department]) acc[currEmp.department]++;
        else acc[currEmp.department] = 1;
        return acc;
    }, {});

    console.log('departmentsEmployeesMap:', departmentsEmployeesMap);
}
// page2ex1();

function page2ex2() {
    // 2. Write a function findModes(values) that gets an array and uses
    // Array.reduce to create a map and then prints the numbers that occur most
    // often.

    // todo: fix it DONE
    var gValues = [1, 2, 3, 3, 3, 3, 4, 5, 6, 5, 5, 7, 8, 9];

    // console.log('Vals Map:', valuesMap);
    console.log('Most often occurs: ', findModes(gValues));

    function findModes(values) {
        var maxs = [];
        var valuesMap = values.reduce(function(acc, currVal) {
            if (acc[currVal]) acc[currVal]++;
            else acc[currVal] = 1;
            if (maxs[0]) {
                if (acc[currVal] > acc[maxs[0]]) {
                    maxs = [currVal];
                } else if (
                    acc[currVal] === acc[maxs[0]] &&
                    maxs.indexOf(currVal) === -1
                ) {
                    maxs.push(currVal);
                }
            } else {
                maxs.push(currVal);
            }
            return acc;
        }, {});
        return maxs;
    }
}
// page2ex2();

function page2ex3() {
    // 3. Write a function flatten(values) that flattens the array,
    // meaning that if an item in this array is an array, it will push all its
    // values to the result array.
    //   a. i.e. Input: [‘Hello’, [9, 6] ,18, [4, 7, 8]]
    //           output: [‘Hello’, 9, 6 ,18, 4, 7, 8]
    //   b. support only one level of nested values
    //   c. Bonus: use recursion to support any level

    var gArr = ['Hello', [9, 6], 18, [4, [7, 8]]];

    console.log("Expected: ['Hello', 9, 6 ,18, 4, 7, 8]");
    console.log('Got:', flatten(gArr));

    function flatten(values) {
        return values.reduce(function flat(acc, currNode) {
            if (Array.isArray(currNode)) {
                currNode.forEach(function(node) {
                    flat(acc, node);
                });
            } else {
                acc.push(currNode);
            }
            return acc;
        }, []);
    }

    /* WITHOUT RECURSION -- ONE LEVEL NESTED ARRAY
   function flatten(values) {
       var flattenArr = values.reduce(function(acc , currNode){
           if (Array.isArray(currNode)) {
               currNode.forEach(function(node) {
                   acc.push(node);
                });
            } else {
                acc.push(currNode);
            }
            return acc;
        }, []);
        
        return flattenArr;
    }
    */
}
// page2ex3();
