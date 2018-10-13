// Students
// • Create a students array
// • Read student names until “quit” is entered and populate the
// students array with student objects
// • Read 3 grades for each student (each student should have a
// grades array)
// • Calc avg for each student
// • Write the function findWorstStudent(students)
// • Write the function sortStudentsByGrade(students)
// • Write the function sortStudentsByName(students)

console.log('Ex 53 Solution');

var gStudents = [];
var gNextStudentId = 1;

//create students
gStudents.push(createStudent('a'));
gStudents.push(createStudent('d'));
gStudents.push(createStudent('b'));
gStudents.push(createStudent('c'));

//enter grades for students
updateStudentGrades(gStudents[0].id);
updateStudentGrades(gStudents[1].id);
updateStudentGrades(gStudents[2].id);
updateStudentGrades(gStudents[3].id);


sortStudentsByName(gStudents);
console.log(gStudents);
// sortStudentsByGrade(gStudents);

function sortStudentsByName(students) {
    students.sort(sorter);

    function sorter(student1, student2) {
        var tempArray = [student1.name, student2.name];
        tempArray.sort();
        if (tempArray[0] === student1.name) return -1;
        else return 1;
    }
}


function sortStudentsByGrade(students) {

    var compareAvg = function (student1, student2) {
        return student1.avg - student2.avg;
    }

    students.sort(compareAvg);

}

function findWorstStudent(students) {
    var min = Infinity;
    var worstStudent = null;
    for (var i = 0; i < students.length; i++) {
        var currStudent = students[i];
        if (currStudent.avg < min) {
            min = currStudent.avg;
            worstStudent = currStudent;
        }
    }
    return worstStudent;
}

function getStudentById(studentId) {
    // var studentsMap = {};
    for (var i = 0; i < gStudents.length; i++) {
        if (gStudents[i].id === studentId) return gStudents[i];
    }
    return null;
}

function updateStudentGrades(studentId) {
    var student = getStudentById(studentId);
    var avg = 0;
    for (var i = 0; i < 3; i++) {
        var grade = +prompt('Enter student\'s grade:');
        student.grades.push(grade);
        avg += grade;
    }
    avg /= student.grades.length;
    student.avg = avg;
}

function fillStudents() {
    var name = prompt('Enter student name:');
    while (name !== 'quit') {
        gStudents.push(createStudent(name));
    }
}

function createStudent(name) {
    var student = {
        id: gNextStudentId++,
        name: name,
        grades: []
    };
    return student;
} 