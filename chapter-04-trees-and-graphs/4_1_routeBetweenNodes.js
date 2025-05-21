/**
 * Problem 4.1 — Route Between Nodes (Directed Graph)
 *
 * Check if a path exists from start to end node using BFS.
 */

function hasRoute(graph, start, end) {
  if (start === end) return true;

  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === end) return true;

    visited.add(current);

    for (const neighbor of graph[current] || []) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }

  return false;
}
