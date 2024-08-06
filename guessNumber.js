/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let right = n;
  let left = 0;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    const g = guess(mid);

    if (g === 0) {
      return mid;
    }

    if (g === -1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};
