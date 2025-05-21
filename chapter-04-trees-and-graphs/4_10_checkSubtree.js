/**
 * Problem 4.10 - Check Subtree
 *
 * Return true if T2 is a subtree of T1.
 *
 * Time Complexity: O(n * m) worst case
 * Space Complexity: O(h1 + h2) - stack usage; h1, h2 - height of T1 and T2
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isSubtree(t1, t2) {
  if (!t2) return true; //empty tree is a subtree of any tree
  if (!t1) return false; // non-empty T2 can't be in empty T1

  if (t1.val === t2.val && matchTree(t1, t2)) {
    return true;
  }

  return isSubtree(t1.left, t2) || isSubtree(t1.right, t2);
}

function matchTree(n1, n2) {
  if (!n1 && !n2) return true; // both -> match
  if (!n1 || !n2) return false; // only one is null
  if (n1.val !== n2.val) return false;

  return matchTree(n1.left, n2.left) && matchTree(n1.right, n2.right);
}
