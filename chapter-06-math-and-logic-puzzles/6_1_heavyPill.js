/**
 * Problem 6.1 - the Heavy Pill
 *
 * There are 20 bottles of pills. One contains pills that weigh 1.1g,
 * the others weigh 1.0g each. You can only use the scale once.
 * Determine which bottle is heavy based on a single weight measurement.
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

function findHeavyBottle(bottles) {
  let expectedWeight = 0;
  let actualWeight = 0;

  for (let i = 0; i < bottles.length; i++) {
    const count = i + 1;
    expectedWeight += count * 1.0;
    actualWeight += count * bottles[i];
  }

  const excess = actualWeight - expectedWeight;
  const heavyBottleIndex = Math.round(excess / 0.1);

  return heavyBottleIndex;
}
