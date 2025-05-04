/**
 * Problem 2.7: Intersection
 *
 * Determine if two linked lists intersect — by reference, not value.
 * Return the intersecting node.
 *
 * Time Complexity: O(N + M)
 * Space Complexity: O(1)
 */

function getTailAndSize(head) {
  let size = 0;
  let current = head;

  while (current && current.next) {
    current = current.next;
    size++;
  }
  return { tail: current, size: size + 1 };
}

function getKthNode(head, k) {
  let current = head;
  while (k > 0 && current !== null) {
    current = current.next;
    k--;
  }
  return current;
}

function findIntersection(head1, head2) {
  const { tail: tail1, size: size1 } = getTailAndSize(head1);
  const { tail: tail2, size: size2 } = getTailAndSize(head2);

  // if tails are nott the same by reference, no intersaction
  if (tail1 !== tail2) return null;

  // align both lists
  let shorter = size1 < size2 ? head1 : head2;
  let longer = size1 < size2 ? head2 : head1;

  longer = getKthNode(longer, Math.abs(size1 - size2));

  while (shorter !== longer) {
    shorter = shorter.next;
    longer = longer.next;
  }

  return longer; // or shorter
}

module.exports = findIntersection;
