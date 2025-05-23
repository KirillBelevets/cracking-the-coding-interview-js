/**
 * Problem 6.2 — Basketball
 *
 * Given a probability `p`, return which game is better:
 * "game1" (1 shot), "game2" (2 of 3 shots), or "equal".
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

function betterGame(p) {
  if (p < 0 || p > 1) throw new Error("Invalid probability");

  const game1 = p;
  const game2 = p * p * (3 - 2 * p); // derived: 3p^2(1 - p) + p^3

  if (Math.abs(game1 - game2) < 1e-9) return "equal";

  return game2 > game1 ? "game2" : "game1";
}
