const fs = require("fs");

// Create readable stream for source file
const source = fs.createReadStream("largefile.txt");

// Create writable stream for destination file
const destination = fs.createWriteStream("copy.txt");

// Pipe data from source to destination
source.pipe(destination);

// When copying is completed
destination.on("finish", () => {
    console.log("Large file copied successfully.");
});

// Handle errors
source.on("error", (err) => {
    console.log("Error reading file:", err.message);
});

destination.on("error", (err) => {
    console.log("Error writing file:", err.message);
});
