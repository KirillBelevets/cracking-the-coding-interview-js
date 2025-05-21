/**
 * Problem 4.6 — In-Order Successor
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function isOrderSuccessor(node) {
  if (!node) return null;

  // case 1: right child exists -> go down right, then all the way left
  if (node.right) {
    let current = node.right;
    while (current.left) {
      current = current.left;
    }

    return current;
  }

  // case 2: no right child -> go up until node is left child of parent
  let current = node;
  while (current.parent && current.parent.right === current) {
    current = current.parent;
  }

  return current.parent || null;
}
