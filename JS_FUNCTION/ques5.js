// Parent constructor
function Person(name) {
    this.name = name;
}

// Method in Person prototype
Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

// Child constructor
function Student(name, branch) {
    Person.call(this, name); // inherit properties
    this.branch = branch;
}

// Inheriting Person prototype
Student.prototype = Object.create(Person.prototype);

// Fixing constructor reference
Student.prototype.constructor = Student;

// Adding method to Student prototype
Student.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

// Creating object
const s1 = new Student("Riya", "Computer Science");

// Calling methods from both prototypes
s1.showName();    // from Person prototype
s1.showBranch();  // from Student prototype

// Demonstrating prototype chain
console.log(Object.getPrototypeOf(s1));           // Student.prototype
console.log(Object.getPrototypeOf(Student.prototype)); // Person.prototype
