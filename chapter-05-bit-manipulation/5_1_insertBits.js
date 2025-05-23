/**
 * Problem 5.1 — Insertion
 *
 * Insert M into N from bit j to bit i.
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

function insertBits(N, M, i, j) {
  // create mask to clear bits j through i in N
  const allOnes = ~0; // all 1s

  const left = allOnes << (j + 1); // 1s before position j
  const right = (1 << i) - 1; // 1s after position i
  const mask = left | right; // 0s between i and j, 1s elsewhere

  // clear bits j through i then OR with shifted M
  const n_cleared = N & mask; // clear bits j..i
  const m_shifted = M << i; // shift M into position

  return n_cleared || m_shifted;
}
