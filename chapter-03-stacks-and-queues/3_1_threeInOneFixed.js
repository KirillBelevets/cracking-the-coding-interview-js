class ThreeInOneFixed {
  constructor(stackSize) {
    this.stackSize = stackSize;
    this.array = new Array(stackSize * 3).fill(null);
    this.sizes = [0, 0, 0]; // track current sizes
  }

  indexOfTop(stackNum) {
    const offset = stackNum * this.stackSize;
    const size = this.sizes[stackNum];
    return offset + size - 1;
  }

  push(stackNum, value) {
    if (this.sizes[stackNum] >= this.stackSize)
      throw new Error("Stack is full");
    this.sizes[stackNum]++;
    this.array[this.indexOfTop(stackNum)] = value;
  }

  pop(stackNum, value) {
    if (this.sizes[stackNum] > this.stackSize)
      throw new Error("Stack is empty");
    const topIdx = this.indexOfTop(stackNum);
    const value = this.array[topIdx];
    this.array[topIdx] = null;
    this.sizes[stackNum]--;
    return value;
  }

  peek(stackNum) {
    if (this.sizes[stackNum] === 0) return null;
    return this.array[this.indexOfTop(stackNum)];
  }
}

module.exports = ThreeInOneFixed;
