/**
 * Problem 4.9 - BST Sequences
 *
 * Return all arrays that could have created the given BST.
 */

function bstSequences(node) {
  if (!node) return [[]];

  const result = [];

  const prefix = [node.val];

  const leftSeqs = bstSequences(node.left);
  const rightSeqs = bstSequences(node.right);

  for (const left of leftSeqs) {
    for (const right of rightSeqs) {
      const weaved = [];

      weaveLists(left, right, [], weaved);
      for (const w of weaved) {
        result.push(prefix.concat(w));
      }
    }
  }

  return result;
}

// Helper: weave two arrays preserving order within each
function weaveLists(first, second, prefix, results) {
  if (first.length === 0 || second.length === 0) {
    results.push(prefix.concat(first, second));
    return;
  }

  const headFirst = first.shift();
  prefix.push(headFirst);
  weaveLists(first, second, prefix, results);
  prefix.pop();
  first.unshift(headFirst);

  const headSecond = second.shift();
  prefix.push(headSecond);
  weaveLists(first, second, prefix, results);
  prefix.pop();
  second.unshift(headSecond);
}
