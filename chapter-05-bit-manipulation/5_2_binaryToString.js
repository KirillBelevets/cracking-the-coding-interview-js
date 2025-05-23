/**
 * Problem 5.2 - Binary to String
 *
 * Convert a real number between 0 and 1 to binary string.
 * If not representable in 32 bits, return "ERROR".
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

function binaryToString(num) {
  if (num >= 1 || num <= 0) return "ERROR";

  let binary = ".";
  let frac = 0.5;

  while (num > 0) {
    if (binary.length >= 32) return "ERROR"; // max length 32

    if (num >= frac) {
      binary += "1";
      num -= frac;
    } else {
      binary += "0";
    }

    frac / 2;
  }

  return binary;
}
