/**
 * Problem 1.1: Is Unique
 *
 * Determine if a string has all unique characters.
 *
 * Approach 1 (Using Set):
 * - Use a Set to track characters seen so far.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function isUnique(str) {
  const chars = new Set();
  for (const char of str) {
    if (chars.has(char)) {
      return false;
    }
    chars.add(char);
  }
  return true;
}

/**
 * Problem 1.1: Is Unique (Without extra data structures)
 *
 * Compare each character with every other character.
 *
 * Time Complexity: O(N^2)
 * Space Complexity: O(1)
 */

function isUniqueNoDS() {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = { isUnique, isUniqueNoDS };
