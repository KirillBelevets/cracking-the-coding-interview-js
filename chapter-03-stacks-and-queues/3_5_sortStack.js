/**
 * Problem 3.5 — Sort Stack
 *
 * Sort a stack using only one additional stack.
 * Smallest items should be on top (ascending order from top to bottom).
 */

function sortStack(stack) {
  const tempStack = [];

  while (stack.length > 0) {
    const temp = stack.pop();

    // move from tempStack back to stack until correct position found
    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > 0) {
      stack.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  // reverse again so smallest ends up on top of stack
  while (tempStack.length > 0) {
    stack.push(tempStack.pop());
  }

  return stack;
}

module.exports = sortStack;
