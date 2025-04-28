/**
 * Problem 1.2: Check Permutation
 *
 * Check if two strings are permutations of each other.
 *
 * Approach:
 * - Sort both strings and compare them.
 *
 * Time Complexity: O(N log N)
 * Space Complexity: O(N)
 */

function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const sortString = (s) => s.split("").sort().join();

  return sortString(str1) === sortString(str2);
}

/**
 * Problem 1.2: Check Permutation (Using character counting)
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1) - assuming fixed alphabet size (ASCII)
 */

function checkPermutationCount(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const harCount = {};

  for (let char of str1) {
    chatCount[char] = (charCount || 0) + 1;
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  return true;
}

module.exports = { checkPermutation, checkPermutationCount };
