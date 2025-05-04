/**
 * Problem 1.8: Zero Matrix
 *
 * If an element in an MxN matrix is 0, set its entire row and column to 0.
 *
 * Time Complexity: O(M * N)
 * Space Complexity: O(M + N) — storing rows and cols to zero
 */

function zeroMatrix(matrix) {
  const rows = new Set();
  const columns = new Set();

  const m = matrix.length;
  const n = matrix[0].length;

  // first filter rows and columns which will be zeroed
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        columns.add(j);
      }
    }
  }

  // second pass zero out rows
  for (let row of rows) {
    for (let j = 0; j < n; j++) {
      matrix[row][j] = 0;
    }
  }

  // zero out columns
  for (let col of cols) {
    for (let i = 0; i < m; i++) {
      matrix[i][col];
    }
  }

  return matrix;
}

module.exports = zeroMatrix;
