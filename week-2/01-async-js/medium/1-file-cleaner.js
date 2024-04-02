const { error } = require("console");
const fs = require("fs");
const filePath = `text.txt`;

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file: ", err);
    return;
  }

  const cleanData = data.replace(/\s+/g, " ");

  fs.writeFile(filePath, cleanData, "utf8", (writeErr) => {
    if (writeErr) {
      console.error("Error writing file : ", writeErr);
      return;
    }
    console.log("File has been cleaned and saved");
  });
});

console.log("Cleaning file...");
