
function *numbers() {
    let x = 0;
    while (true) {
        let y = yield x;
        x += y;
        if (x > 10)
            return x;
    }
}

function *numbers2() {
    let x = 0;
    while (true) {
        yield x;
        x += 2;
        if (x > 10)
            return x;
    }
}

let n = numbers();

console.log(n.next());
console.log(n.next(5));
console.log(n.next(1));
console.log(n.next(3));
console.log(n.next(4));

for (let v of numbers2()) {
    console.log(" -- " + v);
}

function *fibonacci() {
    let [v1, v2] = [1, 1];
    while (v1 < 1000) {
        yield v1;
        [v1, v2] = [v2, v1+v2];
    }
}

for (let n of fibonacci()) {
    console.log("> " + n);
}









