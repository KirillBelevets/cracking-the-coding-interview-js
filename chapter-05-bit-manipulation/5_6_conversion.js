/**
 * Problem 5.6 — Conversion
 *
 * Count number of differing bits between A and B.
 *
 * Time Compexity: O(b) where b is bits in integer (up to 32 bits)
 * Space Complexity: O(1)
 */

function bitSwapRequired(a, b) {
  let count = 0;
  let c = a ^ b; // XOR: bits that differ will be 1

  while (c !== 0) {
    count += c & 1; // check least significant bit
    c >>>= 1; //unsigned right shift
  }

  return count;
}
