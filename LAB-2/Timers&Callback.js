console.log("===========================================");
console.log("NODE.JS TIMERS AND CALLBACKS DEMONSTRATION");
console.log("===========================================\n");

// Callback Function
function displayMessage() {
    console.log("\nCallback Function Executed Successfully.");
    console.log("Welcome to Full Stack Development Laboratory.");
    console.log("\nProgram Completed.");
}

console.log("Program Started...");
console.log("Waiting for 3 seconds...");

// Timer
setTimeout(displayMessage, 3000);

console.log("Program Executed Successfully.");