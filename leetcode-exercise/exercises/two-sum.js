/**
 * @see https://leetcode.com/problems/two-sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let isTargetFineded = false
  const result = [0, 1]

  for (let i = 0; i < nums.length; i++) {
    result[0] = i

    for (let j = i + 1; j < nums.length; j++) {
      result[1] = j

      if (nums[i] + nums[j] === target) {
        isTargetFineded = true
        break
      }
    }

    if (isTargetFineded) break
  }

  return result
}

console.log(twoSum([3, 3], 6))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([2, 7, 11, 15], 9))
