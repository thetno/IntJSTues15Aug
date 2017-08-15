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
    },
    smarterThanMe: function (s) {
        return s.gpa > this.gpa;
    },
    getIsSmarterThanMe: function () {
        return s => s.gpa > this.gpa
    }
};

function Student(name, gpa, courses) {
//    let x = Object.getPrototypeOf(this);
//    console.log("same? " + (x === studentProto));
    this.name = name;
    this.gpa = gpa;
    this.courses = courses;
}

Student.prototype = studentProto;

let fred = new Student("Fred", 3.2, []);
console.log("" + fred);

let x = Object.getPrototypeOf(fred);
console.log("same? " + (x === studentProto));

// THIS WOULD BE BAD!
//Student("Fred", 3.2, []);
//
//
//let roster = [];
//let fred = makeAStudent("Fred", 3.8, ["Math", "Physics"]);
//roster.push(fred);
//roster.push(makeAStudent("Jim", 3.4, ["Math"]));
//roster.push(makeAStudent("Shiela", 3.9, ["Math", "Astronomy", "Astrophysics"]));
