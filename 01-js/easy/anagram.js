/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Convert strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Get lengths of both strings
  let n1 = str1.length;
  let n2 = str2.length;

  // If length of both strings is not the same, they cannot be an anagram
  if (n1 !== n2) return false;

  // Convert strings to arrays, sort them, and then join back to strings
  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");

  // Compare sorted strings
  for (let i = 0; i < n1; i++)
    if (sortedStr1[i] !== sortedStr2[i]) return false;

  return true;
}

module.exports = isAnagram;
