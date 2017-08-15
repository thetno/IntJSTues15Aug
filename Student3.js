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

function makeAStudent(name, gpa, courses) {
    let rv = Object.create(studentProto);
    rv.name = name;
    rv.gpa = gpa;
    rv.courses = courses;
    return rv;
}

let roster = [];
let fred = makeAStudent("Fred", 3.8, ["Math", "Physics"]);
roster.push(fred);
roster.push(makeAStudent("Jim", 3.4, ["Math"]));
roster.push(makeAStudent("Shiela", 3.9, ["Math", "Astronomy", "Astrophysics"]));

roster
        .map(s => s.gpa)
        .forEach(s => console.log("> " + s));
let gpas = roster.map(s => s.gpa);
let sum = gpas.reduce((a, b) => a + b);
console.log("sum is " + sum);
console.log("average is " + (sum / gpas.length));
