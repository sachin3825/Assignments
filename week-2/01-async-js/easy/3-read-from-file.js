const fs = require("fs");

fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:", data);
});

console.log("Reading file asynchronously...");

function expensiveOperation() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    // Increase for a more expensive operation
    sum += i;
  }
  console.log("Expensive operation done:", sum);
}

expensiveOperation();
