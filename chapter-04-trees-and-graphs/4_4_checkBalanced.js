/**
 * Problem 4.4 — Check Balanced
 *
 * Return true if binary tree is height-balanced.
 */

function isBalanced(root) {
  function checkHeight(node) {
    if (!node) return 0;

    const left = checkHeight(node.left);
    if (left === -1) return -1; //left unbalanced

    const right = checkHeight(node.right);
    if (right === -1) return -1; //right unbalanced

    if (Math.abs(left - right) > 1) return -1; // current node unbalanced

    return Math.max(left, right) + 1;
  }

  return checkHeight(root) !== -1;
}
