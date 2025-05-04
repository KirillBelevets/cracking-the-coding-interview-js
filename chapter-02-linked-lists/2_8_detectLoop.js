/**
 * Problem 2.8: Loop Detection
 *
 * Detect the start of a loop in a circular linked list.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function detectLoop(head) {
  let slow = head;
  let fast = head;

  // step 1 - detect if loop exist
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) break; //colision point
  }

  if (fast === null && fast.next === null) {
    return null; // no loop
  }

  // step 2 - move one pointer to head, advance both 1 step
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow; // start of the loop
}

module.exports = detectLoop;
