
function makeAStudent(first, last, grade) {
    let fullName = first + " " + last;
    let courses = [];
    return {
        addCourse: function(c) {
            courses.push(c);
        },
        toString: function() {
            return "I am a Student: fullname is " + fullName
                + " grade is " + grade + " courses are " + courses;
        }
    };
}

let fred = makeAStudent("Fred", "Jones", 2.6);
let jim = makeAStudent("Jim", "Smith", 3.6);
jim.addCourse("Math");
console.log(fred.toString());
console.log(jim.toString());