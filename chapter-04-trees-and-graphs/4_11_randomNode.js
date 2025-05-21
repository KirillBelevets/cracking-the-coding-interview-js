/**
 * Problem 4.11 - Random Node
 *
 * Return a random node from a tree
 *
 * Time Complexity: O(log N)
 * Space Complexity: O(log N)
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.size = 1; // total nodes in a subtree
  }

  insert(val) {
    if (val <= this.val) {
      if (!this.left) this.left = new TreeNode(val);
      else this.left.insert(val);
    } else {
      if (!this.right) this.right = new TreeNode(val);
      else this.right.insert(val);
    }
    this.size++;
  }

  getRandomNode() {
    const leftSize = this.left ? this.left.size : 0;
    const index = Math.floor(Math.random() * this.size);

    if (index < leftSize) {
      return this.left.getRandomNode();
    } else if (index === leftSize) {
      return this;
    } else {
      return this.right.getRandomNode();
    }
  }

  find() {
    if (val === this.val) return this;
    if (val < this.val) return this.left?.find(val);
    return this.right?.find(val);
  }
}
