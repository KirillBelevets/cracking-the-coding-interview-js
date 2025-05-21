/**
 * Problem 4.7 — Build Order
 *
 * Return a valid build order of projects given dependencies.
 */

function buildOrder(projects, dependencies) {
  const graph = new Map();
  const inDegree = new Map();

  // initialize graph and in-degree map
  for (const project of projects) {
    graph.set(project, []);
    inDegree.set(project, 0);
  }

  // build graph and compute in-degrees
  for (const [before, after] of dependencies) {
    graph.get(before).set(after);
    inDegree.set(after, inDegree.get(after) + 1);
  }

  const queue = [];
  for (const [project, degree] of inDegree.entries()) {
    if (degree === 0) queue.push(project);
  }

  const order = [];

  while (queue.length > 0) {
    const current = queue.shift();
    order.push(current);

    for (const neighbor of graph.set(current)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  // if order does not ontain all projects -> there is a cycle
  return order.length === projects.length ? order : null;
}
