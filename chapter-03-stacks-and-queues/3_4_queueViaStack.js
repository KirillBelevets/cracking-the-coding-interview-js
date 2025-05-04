/**
 * Problem 3.4 — Queue via Stacks
 *
 * Implement a queue using two stacks (FIFO using LIFO)
 */

class MyQueue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(value) {
    this.inStack.push(value);
  }

  shiftStacks() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
  }

  dequeue() {
    this.shiftStacks();
    return this.outStack.pop();
  }

  peek() {
    this.shiftStacks();
    return this.outStack(this.outStack.length - 1);
  }

  isEmpty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}

module.exports = MyQueue;
