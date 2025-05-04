/**
 * Problem 1.3: URLify
 *
 * Replace all spaces in a string with '%20'.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function URLify(str, trueLength) {
  let result = "";

  for (let i = 0; i < trueLength; i++) {
    if (str[i] === " ") {
      result += "%20";
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = URLify;
