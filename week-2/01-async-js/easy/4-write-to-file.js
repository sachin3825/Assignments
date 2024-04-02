const fs = require("fs");

// Data to write to the file
const data = "Hello, world! This is text written to a file.";

// Asynchronously write data to a file
fs.writeFile("text.txt", data, "utf8", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File has been written successfully.");
});

console.log("Writing to file asynchronously...");
