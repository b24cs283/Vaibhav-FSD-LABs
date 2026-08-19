const fs = require("fs");

// Create a read stream
let readStream = fs.createReadStream("input.txt");

// Create a write stream
let writeStream = fs.createWriteStream("output.txt");

// Read data and write it to output file
readStream.on("data", function(data) {
    writeStream.write(data);
});

// When reading is complete
readStream.on("end", function() {
    console.log("File copied successfully!");
});