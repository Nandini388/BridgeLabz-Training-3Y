let name = "Nandini";
let age = 20;
let isStudent = true;
let subjects = ["Java", "Python", "JavaScript"];
let student = { name: "Nandini", age: 20 };
let marks = null;
let address;

let data = [
    { Label: "Name", Value: name, Type: typeof name },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects, Type: Array.isArray(subjects) ? "Array" : typeof subjects },
    { Label: "Student Object", Value: student, Type: typeof student },
    { Label: "Marks", Value: marks, Type: typeof marks },
    { Label: "Address", Value: address, Type: typeof address }
];

console.table(data);