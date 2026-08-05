console.log("==================================");
console.log("Node.js GLOBAL OBJECTS DEMONSTRATION");
console.log("==================================");

// Creating a global variable
global.message = "Welcome to Node.js Programming";

console.log("\nWelcome to FSD LAB\n");

// Display current working directory
console.log("Current Working Directory:");
console.log(process.cwd());

// Display Node.js version
console.log("\nNode.js Version:");
console.log(process.version);

// Display operating system
console.log("\nOperating System:");
console.log(process.platform);

// Display global variable
console.log("\nGlobal Message:");
console.log(global.message);

console.log("\nProgram Executed Successfully");

// Measure execution time
console.time("A");

setTimeout(() => {
    console.timeEnd("A");
}, 3000);

// Import HTTP module
const http = require("http");

// Create HTTP server
const server = http.createServer((req, res) => {
    res.write("Hello, Vaibhav Muniganti!");
    res.end();
});

// Start server
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// Function to print Hello repeatedly
function sayHello() {
    console.log("Hello");
}

// Print Hello every 2 seconds
let id = setInterval(sayHello, 2000);

// Stop after 7 seconds
setTimeout(() => {
    clearInterval(id);
}, 7000);