class Student {
    constructor(name, gpa, courses) {
        this.name = name;
        this.gpa = gpa;
        this.courses = courses;
    }
    
    toString() {
        return "A student with name " + this.name
            + " and a gpa " + this.gpa;
    }
    
    get addressMe() {
        console.log("invoking the addressMe method");
        return "Mr " + this.name;
    }
    
    set addressMe(n) {
        this.name = n;
    }
}

let fred = new Student("Fred", 3.2, ["Math"]);
console.log("Fred is: " + fred);

//Student("Joe", 2.2, []);

console.log(fred.addressMe);
fred.addressMe = "AlbertyFreddy";
console.log(fred.addressMe);

