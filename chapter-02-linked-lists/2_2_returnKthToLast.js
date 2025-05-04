/**
 * Problem 2.2: Return Kth to Last
 *
 * Return the Kth to last element of a singly linked list.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function returnKthToLast(head, k) {
  let p1 = head;
  let p2 = head;

  // move p1 k steps ahead
  for (let i = 0; i < k; i++) {
    if (p1 === null) return null; // k is larger than list length

    p1 = p1.next;
  }

  // move both pointers until p1 hits the end
  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2; // p2 is now Kth to last
}

module.exports = returnKthToLast;
