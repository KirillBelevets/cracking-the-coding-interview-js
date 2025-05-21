/**
 * Problem 4.8 — First Common Ancestor
 *
 * Assumes both nodes are present in the tree.
 */

function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // if p and q are found in different branches
  if (left && right) return root;

  // otherwise, return the non-null side
  return left || right;
}
