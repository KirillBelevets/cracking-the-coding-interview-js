/**
 * Problem 1.4: Palindrome Permutation
 *
 * Check if a string is a permutation of a palindrome.
 *
 * Approach:
 * - Count characters.
 * - At most one character can have an odd count.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function isPalindromePermutation(str) {
  const charCount = {};

  for (let char of str.toLowerCase()) {
    if (char === " ") continue;

    charCount[char] = (charCount[char] || 0) + 1;
  }

  let oddCount = 0;
  for (let count of Object.values(charCount)) {
    if (count % 2 !== 0) {
      oddCount++;
      if (oddCount > 1) {
        return false;
      }
    }
  }
  return true;
}

