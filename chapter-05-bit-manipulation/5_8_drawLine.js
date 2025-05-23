/**
 * Problem 5.8 — Draw Line
 *
 * Draw a horizontal line from (x1, y) to (x2, y) on a byte-based screen.
 * Time Complexity: O(n) where n = x2 - x1 + 1
 * Space Complexity: O(1)
 */

function drawLine(screen, width, x1, x2, y) {
  const bytesPerRow = width / 8;

  const startOffset = x1 % 8;
  const firstFullByte = Math.floor(x1 / 8) + (startOffset ? 1 : 0);

  const endOffset = x2 % 8;
  const lastFullByte = Math.floor(x2 / 8) - (endOffset !== 7 ? 1 : 0);

  const rowOffset = y * bytesPerRow;

  // fill full bytes
  for (let b = firstFullByte; b <= lastFullByte; b++) {
    screen[rowOffset + b] = 0xff;
  }

  // create start and end masks
  const startMask = 0xff >> startOffset;
  const endMask = ~(0xff >> (endOffset + 1));

  if (x1 / 8 === x2 / 8) {
    // x1 and x2 in same byte
    const mask = startMask & endMask;

    screen[rowOffset + Math.floor(x1 / 8)] |= mask;
  } else {
    if (startOffset !== 0) {
      screen[rowOffset + Math.floor(x1 / 8)] |= startMask;
    }

    if (endOffset !== 7) {
      screen[rowOffset + Math.floor(x2 / 8)] |= endMask;
    }
  }

  return screen;
}
