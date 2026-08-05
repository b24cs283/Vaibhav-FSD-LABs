const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

console.log("===========================================");
console.log("NODE.JS CUSTOM EVENTS DEMONSTRATION");
console.log("===========================================\n");

console.log("Welcome to Full Stack Development Laboratory\n");

// First Listener
eventEmitter.on("studentLogin", (name) => {
    console.log("Student Login Event Triggered\n");
    console.log("Student Name:", name);
});

// Second Listener
eventEmitter.on("studentLogin", () => {
    console.log("Attendance Marked Successfully.");
    console.log("Welcome to Full Stack Development Laboratory.");
});

// Emit the event
eventEmitter.emit("studentLogin", "Vaibhav");

console.log("\nProgram Executed Successfully.");