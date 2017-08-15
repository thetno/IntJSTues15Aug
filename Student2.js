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
    smarterThanMe : function(s) {
        return s.gpa > this.gpa;
    },
    getIsSmarterThanMe : function() {
        return s=>s.gpa > this.gpa
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

// in this call fred becomes "this" during the invocation
// fred.toString()


function showName() {
    console.log("name is " + this.name);
}

//showName();

studentProto.showTheName = showName;
fred.showTheName();

//function setName(name) {
//    this.name = name;
//}
//
//setName("Freddy");
//console.log(name);

let professor = {
    name : "Albert",
};

professor.showTheName = showName;
professor.showTheName();