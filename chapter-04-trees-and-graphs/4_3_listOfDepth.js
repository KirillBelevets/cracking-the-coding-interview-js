/**
 * Problem 4.3 — List of Depths
 *
 * Create a list of nodes at each depth of a binary tree.
 * Output: Array of arrays (or linked lists) where each sub-array = one level
 */

function listOfDepth(root) {
  if (!root) return [];

  const result = [];
  let level = [root];

  while (level.length > 0) {
    result.push(level.map((node) => node.val));

    const nextLevel = [];

    for (const node of level) {
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }
    level = nextLevel;
  }

  return result;
}
