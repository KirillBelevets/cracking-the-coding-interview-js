/**
 * Problem 1.5: One Away
 *
 * Check if two strings are one edit away (insert, remove, or replace a character).
 *
 * Approach:
 * - If lengths differ by more than 1, return false.
 * - If lengths equal, check for replacement.
 * - If lengths differ by 1, check for insert/remove.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function oneWay(first, second) {
  if (Math.abs(first.length - second.length > 1)) {
    return false;
  }

  let [s1, s2] =
    first.length < second.length ? [first, second] : [second, first];

  let index1 = 0;
  let index2 = 0;
  let foundDifference = false;

  while (index1 < s1.length && index2 < s2.length) {
    if (s1[index1] !== s2[index2]) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;

      if (s1.length === s2.length) {
        index1++; // move shorter pointer only if lengths are equal (replacement)
      }
    } else {
      index1++; // move shorter pointer normally
    }

    index2++;
  }

  return true;
}
