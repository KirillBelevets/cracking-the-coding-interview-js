/**
 * Problem 4.12 - Paths with Sum
 *
 * Count the number of paths that sum to a given target in a binary tree.
 * Paths can start and end at any node but must go downward (parent -> child).
 *
 * Time Complexity: O(N) N = total number of nodes
 * Space Complexity: O(H) H = height of the tree (used for recursion stack)
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function countPathsWithSum(root, targetSum) {
  const prefixSums = new Map();
  prefixSums.set(0, 1); // Base case: empty path sum = 0

  function dfs(node, runningSum) {
    if (!node) return 0;

    runningSum += node.val;

    const sum = runningSum - targetSum;
    let totalPaths = prefixSums.get(sum) || 0;

    // Update prefixSums
    prefixSums.set(runningSum, prefixSums.get(runningSum) || 0) + 1;

    // Recurse
    totalPaths += dfs(node.left, runningSum);
    totalPaths += dfs(node.right, runningSum);

    // Backtrack
    prefixSums.set(runningSum, prefixSums.get(runningSum) - 1);

    return totalPaths;
  }

  return dfs(root, 0);
}
