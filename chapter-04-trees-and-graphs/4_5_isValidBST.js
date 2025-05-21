/**
 * Problem 4.5 — Validate BST
 *
 * Return true if binary tree is a valid binary search tree.
 */

function isValidBST(root) {
  function validate(node, min, max) {
    if (!node) return true;

    // node value must be within bounds
    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      return false;
    }

    // recurse left with updated max, and right with updated min
    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    );
  }

  return validate(root, null, null);
}
