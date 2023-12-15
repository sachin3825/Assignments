/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let largest = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]; // Update largest if a larger number is found
    }
  }

  if (largest === -Infinity) {
    return undefined; // Return undefined if no valid numeric element is found
  }

  return largest;
}

module.exports = findLargestElement;
