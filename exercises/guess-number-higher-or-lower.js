/**
 * @see https://leetcode.com/problems/guess-number-higher-or-lower
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
const guess = num => {
  const myNum = 6

  if (myNum < num) return -1
  if (myNum > num) return 1

  return 0
}

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = n => {
  if (guess(n) === 0) return n

  if (guess(n) === 1) {
    while (true) {
      n++

      if (guess(n) === 0) return n
    }
  }

  if (guess(n) === -1) {
    let left = 1
    let right = n

    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      const current = guess(mid)

      if (current === 0) return mid
      if (current === -1) right = mid
      if (current === 1) left = mid + 1
    }

    return left
  }
}

console.log(guessNumber(10))
console.log(guessNumber(1))
console.log(guessNumber(2))
