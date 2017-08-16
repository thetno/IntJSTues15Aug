"use strict";

function doStuff(a, b, ...others) {
    console.log("other is " + others);
}

doStuff(1, 2, 3, 4, 5);

let a1 = [1, 2, 3, 4, 5];
let a2 = [8, 9, 10];
doStuff(...a1, 6, 7, ...a2);
let a3 = [...a1, 6, 7, ...a2];
console.log(a3);

let [x, y, ...r] = a3;
console.log('x is ' + x);
console.log('y is ' + y);
console.log('r is ' + r);

[x, y] = [y, x];
console.log('x is ' + x);
console.log('y is ' + y);

function doMoreStuff(a, b = 9) {
    console.log("a is " + a);
    console.log("b is " + b);
}

doMoreStuff();
doMoreStuff(1);
doMoreStuff(1, 2);

let obj = { name : "fred", gpa : 3.2 };
let {name, gpa: grade} = obj;
console.log("name is " + name);
console.log("grade is " + grade);
