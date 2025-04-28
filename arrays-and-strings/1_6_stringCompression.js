/**
 * Problem 1.6: String Compression
 *
 * Compress the string using counts of repeated characters.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function compressString(str) {
  if (str.length === 0) return str;

  let compressed = "";
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      compressed += str[i - 1] + count;
      count = 1;
    }
  }

  return compressed.length < str.length ? compressed : str;
}

module.exports = compressString;
