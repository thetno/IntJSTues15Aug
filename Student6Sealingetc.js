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
        return s => s.gpa > this.gpa;
    }
};

function Student(name, gpa, courses) {
    this.name = name;
    this.gpa = gpa;
    this.courses = courses;
}

Student.prototype = studentProto;

let roster = [];
let fred = new Student("Fred", 3.8, ["Math", "Physics"]);
roster.push(fred);
roster.push(new Student("Jim", 3.4, ["Math"]));
roster.push(new Student("Shiela", 3.9, ["Math", "Astronomy", "Astrophysics"]));

Student.prototype.doStuff = function () {
    console.log("this is doStuff");
};
console.log(Student.prototype);

// Trial 1, freeze the prototype then show cannot delete
// or change elements from it (succeeds if not frozen)
//Object.freeze(Student.prototype);
//delete Student.prototype.doStuff;
//Student.prototype.doStuff = function() {
//    console.log("changed doStuff...");
//};
//Student.prototype.doStuff();

// Trial 2, seal the prototype then show cannot delete
// elements from it, but can change them (if they're writable)
//Object.seal(Student.prototype);
//delete Student.prototype.doStuff;
//Student.prototype.doStuff = function() {
//    console.log("changed doStuff...");
//};
//Student.prototype.doStuff();

// set writable true, all else to false
Object.defineProperty(Student.prototype, "doStuff",
        {
            writable: true, configurable: false
        });
// change succeeds
Student.prototype.doStuff = function() {
    console.log("more doStuff...");
};
Student.prototype.doStuff();
// can still change writability to false even if not configurable
Object.defineProperty(Student.prototype, "doStuff",
        {
            writable: false
        });
// so this then fails
//Student.prototype.doStuff = function() {
//    console.log("failed doStuff...");
//};

console.log(Student.prototype);
