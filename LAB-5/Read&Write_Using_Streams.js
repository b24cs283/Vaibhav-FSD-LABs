const fs = require("fs");

// Create a readable stream
const readableStream = fs.createReadStream("input.txt", {
    encoding: "utf8"
});

// Create a writable stream
const writableStream = fs.createWriteStream("output.txt");

// Read data and write it to output file
readableStream.on("data", (chunk) => {
    console.log("Reading data...");
    writableStream.write(chunk);
});

// When reading is complete
readableStream.on("end", () => {
    console.log("Reading completed.");
    writableStream.end();
});

// Handle errors
readableStream.on("error", (err) => {
    console.log("Error:", err.message);
});

writableStream.on("finish", () => {
    console.log("Data written successfully to output.txt");
});
