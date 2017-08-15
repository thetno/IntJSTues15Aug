
let myArray = [1, 3, 5, 7, 9];

function showArray(myArray) {
    for (let x in myArray) {
        console.log(x + " : " + myArray[x]);
    }
    console.log("----------------------------------");
}

function showArray2(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        console.log(i + " : " + myArray[i]);
    }
    console.log("-----------------------------------");
}

showArray(myArray);

myArray[9] = 100;
myArray.banana = "fruit";

showArray(myArray);
showArray2(myArray);

let fred = {
    name : "Fred"
};

fred["here is a key with spaces"] = "stupid";

showArray(fred);
let n = 'na';
let m = 'me';
console.log(fred[n + m]);
