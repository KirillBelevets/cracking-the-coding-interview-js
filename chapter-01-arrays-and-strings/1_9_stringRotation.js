/**
 * Problem 1.9: String Rotation
 *
 * Check if s2 is a rotation of s1 using only one call to isSubstring.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function isRotation(s1, s2) {
  if (s1.length !== s2.length || s1.length === 0) return false;

  const combined = s1 + s1;
  // simulates isSubstring -> includes
  combined.includes(s2);
}

module.exports = isRotation;
