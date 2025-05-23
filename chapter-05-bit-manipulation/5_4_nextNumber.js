/**
 * Problem 5.4 - Next Number
 *
 * Return the next smallest and next largest numbers
 * that have the same number of 1 bits as `n`.
 *
 * Time Complexity: O(b) where b is number of bits in integer
 * Space Complexity: O(1)
 */

function getNextNumbers(n) {
  return {
    nextSmallest: getPrev(n),
    nextLargest: getNext(n),
  };
}

function getNext(n) {
  let c = n;
  let c0 = 0;
  let c1 = 0;

  // count trailing 0s
  while ((c & 1) === 0 && c !== 0) {
    c0++;
    c >>> 1;
  }

  // count 1s after that
  while ((c & 1) === 1) {
    c1++;
    c >>> 1;
  }

  // if no higher number possible
  if (c0 + c1 === 31 || c0 + c1 === 0) return -1;

  let p = c0 + c1;

  // flip rightmost non-trailing 0
  n |= 1 << p;

  // clear all bits to the right p
  n &= ~((1 << p) - 1);

  //add (c1 - 1) 1s to the right
  n |= (1 << (c1 - 1)) - 1;

  return n;
}

function getPrev(n) {
  let c = n;
  let c0 = 0;
  let c1 = 0;

  // count trailing 1s
  while ((c & 1) === 1) {
    c1++;
    c >>= 1;
  }

  // if only 0s after, no smaller
  if (c === 0) return -1;

  // count 0s after the trailing 1s
  while ((c & 1) === 0 && c !== 0) {
    c0++;
    c >>= 1;
  }

  let p = c0 + c1;

  // clear from bit p onward
  n &= ~0 << (p + 1);

  // create mask with (c1 + 1) ones
  let mask = (1 << (c1 + 1)) - 1;

  // insert them at position (c0 - 1)
  n |= mask << (c0 - 1);

  return n;
}
