/**
 * Problem 4.2 — Minimal Tree
 *
 * Given a sorted array, create a binary search tree (BST) with minimal height.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

function createMinimalBST(sortedArray) {
  if (!sortedArray || sortedArray.length === 0) return null;

  function build(start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(sortedArray[mid]);

    node.left = build(start, mid - 1);
    node.right = build(mid + 1, end);

    return node;
  }

  return build(0, sortedArray.length - 1);
}
