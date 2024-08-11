// Define the Person class
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for the name property
    get name() {
        return this._name;
    }

    // Setter for the age property
    set age(age) {
        this._age = age;
    }
}

// Define the Student class, which extends Person
class Student extends Person {
    // Method to log that the student is studying
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Define the Teacher class, which extends Person
class Teacher extends Person {
    // Method to log that the teacher is teaching
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
