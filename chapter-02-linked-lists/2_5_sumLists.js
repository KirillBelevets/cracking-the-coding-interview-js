/**
 * Problem 2.5: Sum Lists
 *
 * Add two numbers represented by reversed linked lists.
 * Each node is a digit. Return result as a new linked list.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

const LinkedListNode = require("./linkedListNode.js");

function sumLists(l1, l2) {
  let carry = 0;
  let resultHead = null;
  let resultTail = null;

  while (l1 || l2 || carry > 0) {
    const val1 = l1 ? l1.value : 0;
    const val2 = l2 ? l2.value : 0;

    const sum = val1 + val2 + carry;

    const digit = sum % 10;
    carry = Math.floor(sum / 10);

    const newNode = new LinkedListNode(digit);

    if (!resultHead) {
      resultHead = newNode;
      resultTail = newNode;
    } else {
      resultTail.next = newNode;
      resultTail = newNode;
    }

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return resultHead;
}

module.exports = sumLists;
