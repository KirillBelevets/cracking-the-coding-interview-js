/**
 * Problem 5.3 — Flip Bit to Win
 *
 * Return the length of the longest sequence of 1s after flipping one 0.
 *
 * Time Complexity: O(b) where b is a number of bits in the integer (typically 32)
 * Space Complexity: O(1)
 */

function flipBitToWin(n) {
  if (~n === 0) return 32; // all 1s

  let currentLength = 0;
  let previousLength = 0;
  let maxLength = 1; // At least one bit can be flipped

  while (n !== 0) {
    if ((n & 1) === 1) {
      currentLength++;
    } else {
      // check next bit
      previousLength = (n & 2) === 0 ? 0 : currentLength;
      currentLength = 0;
    }

    maxLength = Math.max(previousLength + 1 + currentLength, maxLength);
    n >>>= 1; // unsigned right shift
  }

  return maxLength;
}
