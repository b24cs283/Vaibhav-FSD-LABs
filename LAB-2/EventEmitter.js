const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

console.log("===========================================");
console.log("NODE.JS EVENTEMITTER DEMONSTRATION");
console.log("===========================================\n");

console.log("Welcome to Full Stack Development Laboratory\n");

// Register an event listener
eventEmitter.on('welcome', () => {
    console.log("Event Listener Executed.");
    console.log("Welcome to Event-Driven Programming in Node.js.");
});

// Emit the event
eventEmitter.emit('welcome');

console.log('Event "welcome" has been emitted successfully.\n');

console.log("Program Executed Successfully.");