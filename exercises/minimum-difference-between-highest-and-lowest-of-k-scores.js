/**
 * @see https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = (nums, k) => {
  if (nums.length === 1) return 0

  nums.sort((a, b) => a - b)

  let left = 0
  let right = k - 1

  let min = Infinity

  while (right < nums.length) {
    min = Math.min(min, nums[right] - nums[left])

    right++
    left++
  }

  return min
}

console.log(minimumDifference([90], 1))
console.log(minimumDifference([9, 4, 1, 7], 2))
