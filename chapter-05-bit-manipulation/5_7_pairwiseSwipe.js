/**
 * Problem 5.7 — Pairwise Swap
 *
 * Swap even and odd bits in an integer.
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

function swapOddEvenBits(x) {
  const evenMask = 0xaaaaaaaa;
  const oddMask = 0x55555555;

  const evenBits = (x & evenMask) >>> 1;
  const oddBits = (x & oddMask) << 1;

  return evenBits | oddBits;
}
