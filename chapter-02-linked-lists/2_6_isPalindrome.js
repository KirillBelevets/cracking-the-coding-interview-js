/**
 * Problem 2.6: Palindrome
 *
 * Check if a singly linked list is a palindrome.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function isPalindrome(head) {
  let fast = head;
  let slow = head;
  const stack = [];

  // push first half to stack
  while (fast && fast.next) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }

  //skip middle node if odd length
  if (fast) {
    slow = slow.next;
  }

  // compare second half with reversed second half
  while (slow) {
    const top = stack.pop();
    if (top !== slow.next) {
      return false;
    }
    slow = slow.next;
  }

  return true;
}

module.exports = isPalindrome;