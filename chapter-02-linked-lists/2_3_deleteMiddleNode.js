/**
 * Problem 2.3: Delete Middle Node
 *
 * Delete a node from the middle of a singly linked list,
 * given only access to that node.
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

function deleteMiddleNode(node) {
  if (node === null || node.next === null) {
    throw new Error("Cannot delete the last node or null node.");
  }

  node.value = node.next.value;
  node.next = node.next.next;
}

module.exports = deleteMiddleNode;
