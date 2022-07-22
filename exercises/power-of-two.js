/**
 * @see https://leetcode.com/problems/power-of-two
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = n => Math.log2(n) % 1 === 0

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(3))
