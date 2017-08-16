
class Addressable {
    constructor(address = "unknown") {
        this.address = address;
    }

    toString() {
        return "Address: " + this.address;
    }
}

class Student extends Addressable {
    constructor(name, ...rest) {
        super(...rest);
        this.name = name;
    }

    toString() {
        return "Student: " + this.name
                + " " + super.toString();
    }
}

let home = new Addressable("Over there");
console.log(home.toString());

let fred = new Student("Fred", "Over the hill");
console.log(fred.toString());

function getMailLable() {
    return this.name + " " + this.address;
}

fred.getMailLable = getMailLable;

console.log(fred.getMailLable());

let Mailable = (x) => class extends x {
        getMailLable() {
            return this.name + " " + this.address;
        }
    };

let jim = new (Mailable(Student))("Jim", "Round the corner");
console.log(jim.toString());
console.log(jim.getMailLable());
