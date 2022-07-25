/**
 * @see https://leetcode.com/problems/power-of-four
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = n => {
  if (n === 0) return false
  if (n === 1) return true

  return isPowerOfFour(n / 4)
}

console.log(isPowerOfFour(16))
console.log(isPowerOfFour(15))
console.log(isPowerOfFour(4))
