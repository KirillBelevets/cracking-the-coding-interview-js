/**
 * Problem 3.3 - Stack of Plates (SetOfStacks)
 *
 * Simulate a real-life plate stack using multiple sub-stacks.
 */

class SetOfStacks {
  constructor(capacity) {
    if (capacity < 1) throw new Error("Capacity must be at least 1");
    this.capacity = capacity;
    this.stacks = [[]];
  }

  getLastStack() {
    return this.stacks[this.stacks.length - 1];
  }

  push(value) {
    const last = this.getLastStack();
    if (last.length >= this.capacity) {
      this.stacks.push([value]);
    } else {
      last.push(value);
    }
  }

  pop() {
    if (this.stacks.length === 0) return null;
    const last = this.getLastStack();
    const value = last.pop();

    if (last.length === 0 && this.stacks.length > 1) {
      this.stacks.pop();
    }
    return value;
  }

  popAt(index) {
    if (index < 0 || index <= this.stacks.length) return null;

    const stack = this.stacks[index];
    if (stack.length === 0) return null;

    const value = stack.pop();

    return value;
  }
}

module.exports = SetOfStacks;
