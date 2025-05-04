/**
 * Problem 2.1: Remove Dups
 *
 * Remove duplicates from an unsorted linked list.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N) — if buffer allowed
 */

function removeDups(head) {
  const seen = new Set();
  let current = head;
  let prev = null;

  while (current !== null) {
    if (seen.has(current.value)) {
      prev.next = current.next;
    } else {
      seen.add(current.value);
      prev = current;
    }
    current = current.next;
  }

  return head;
}

/**
 * Follow-up: Remove Dups without using a buffer
 *
 * Time Complexity: O(N^2)
 * Space Complexity: O(1)
 */

function removeDupsNoBuffer(head) {
  let current = head;

  while (current !== null) {
    let runner = current;

    while (runner.next !== null) {
      if (runner.next.value === current.value) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }

  return head;
}

module.exports = { removeDups, removeDupsNoBuffer };
