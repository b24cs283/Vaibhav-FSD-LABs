// Create an object
let student = {
    name: "Vaibhav",
    age: 20,
    course: "JavaScript"
};

// Convert object to JSON
let jsonData = JSON.stringify(student);

console.log("JSON Data:");
console.log(jsonData);

// Convert JSON back to object
let newStudent = JSON.parse(jsonData);

console.log("Student Name:", newStudent.name);
console.log("Student Age:", newStudent.age);
console.log("Student Course:", newStudent.course);