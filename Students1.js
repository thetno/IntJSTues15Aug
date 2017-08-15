"use strict";
let studentProto = {
    name: "",
    courses: [],
    gpa: 0,
    toString: function () {
        return "a Student, name : " + this.name;
    },
    getGpaComparator: function (t) {
        return function (s) {
            return s.gpa > t;
        };
    }
};

function makeAStudent(name, gpa, courses) {
    let rv = Object.create(studentProto);
    rv.name = name;
    rv.gpa = gpa;
    rv.courses = courses;
    return rv;
}

let roster = [];
roster.push(makeAStudent("Fred", 3.8, ["Math", "Physics"]));
roster.push(makeAStudent("Jim", 3.4, ["Math"]));
roster.push(makeAStudent("Shiela", 3.9, ["Math", "Astronomy", "Astrophysics"]));

roster[0].toString = function () {
    return "Alors, je suis etudiant, je m'appelle " + this.name;
};

for (let s of roster) {
    console.log("> " + s);
}

//function getSmartStudent(roster, threshold) {
//    let smart = [];
//    for (let s of roster) {
//        if (s.gpa > threshold) {
//            smart.push(s);
//        }
//    }
//    return smart;
//}
//
//function getEnthusiastiStudent(roster, threshold) {
//    let smart = [];
//    for (let s of roster) {
//        if (s.courses.length > threshold) {
//            smart.push(s);
//        }
//    }
//    return smart;
//}

function getMatchingStudents(roster, matcher) {
    let smart = [];
    for (let s of roster) {
        if (matcher(s)) {
            smart.push(s);
        }
    }
    return smart;
}

function isSmart(t, s) {
    return s.gpa > t;
}

function makeFunctionByPartialApplication(f, v) {
    return function (a) {
        return f(v, a);
    };
}

console.log("-----------------------------");
//let smart = getSmartStudent(roster, 3.5);
//function smartStudent(s) {
//    return s.gpa > 3.5;
//}

//let smart = getMatchingStudents(roster, smartStudent);
//let smart = getMatchingStudents(roster, function (s) {
//    return s.gpa > 3.5;
//});
let smart = getMatchingStudents(roster,
        studentProto.getGpaComparator(3));
for (let s of smart) {
    console.log("> " + s);
}
console.log("------------------------------------");
let smart2 = getMatchingStudents(roster,
        makeFunctionByPartialApplication(isSmart, 3.8)
        );
for (let s of smart2) {
    console.log("> " + s);
}

console.log("------------------------------------");
let smart3 = getMatchingStudents(roster,
        isSmart.bind(undefined, 3)
        );
for (let s of smart3) {
    console.log("> " + s);
}

