/**
 * @see https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
  let lastZeroIndex = -1

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && lastZeroIndex === -1) {
      lastZeroIndex = i

      continue
    }

    if (nums[i] !== 0 && lastZeroIndex !== -1) {
      const tmp = nums[i]

      nums[i] = nums[lastZeroIndex]
      nums[lastZeroIndex] = tmp

      lastZeroIndex++
    }
  }
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([0]))
console.log(moveZeroes([0, 1, 0]))
