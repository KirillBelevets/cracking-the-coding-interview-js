class StackMin {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);

    if (this.minStack.length === 0 || value <= this.getMin()) {
      this.minStack.push(value);
    }
  }

  pop() {
    if (this.minStack.length === 0) return null;

    const popped = this.stack.pop();

    if (popped === this.getMin()) {
      this.minStack.pop();
    }

    return popped;
  }

  peek() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    if (this.minStack.length === 0) return null;

    return this.minStack[this.minStack.length - 1];
  }
}

module.exports = StackMin;
