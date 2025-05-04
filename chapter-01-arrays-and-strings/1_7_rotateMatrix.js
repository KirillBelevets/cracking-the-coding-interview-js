/**
 * Problem 1.7: Rotate Matrix
 *
 * Rotate NxN matrix 90 degrees in place.
 *
 * Time Complexity: O(N^2)
 * Space Complexity: O(1)
 */

function rotateMatrix(matrix) {
  const n = matrix.length;

  for (let layer = 0; layer < Math.floor(n / 2); layer++) {
    const first = layer;
    const last = n - 1 - layer;

    for (let i = first; i < last; i++) {
      const offset = i - first;

      // save top
      const top = matrix[first][i];

      // left -> top
      matrix[first][i] = matrix[last - offset][first];

      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset];

      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];

      // top -> right
      matrix[i][last] = top;
    }
  }

  return matrix;
}

module.exports = rotateMatrix;
