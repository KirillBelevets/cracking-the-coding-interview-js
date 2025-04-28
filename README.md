# Cracking the Coding Interview - JavaScript Solutions

This project provides JavaScript solutions for problems from the famous book **"Cracking the Coding Interview"** by Gayle Laakmann McDowell.

✅ 189 Programming Questions  
✅ JavaScript First  
✅ Focus on Clarity, Time Complexity, and Space Complexity

---

## Structure

Each chapter is organized in its own folder:

- `arrays-and-strings/`
- `linked-lists/`
- `stacks-and-queues/`
- `trees-and-graphs/`
- `recursion-and-dynamic-programming/`
- `sorting-and-searching/`
- `system-design-and-object-oriented-design/`

Each file corresponds to a specific question, with clean and tested code.

---

## Example Problem Structure

```javascript
/**
 * Problem 1.1: Is Unique
 * Implement an algorithm to determine if a string has all unique characters.
 *
 * Approach: Use a Set to check for duplicates.
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function isUnique(str) {
  const chars = new Set();
  for (const char of str) {
    if (chars.has(char)) return false;
    chars.add(char);
  }
  return true;
}

module.exports = isUnique;
```
