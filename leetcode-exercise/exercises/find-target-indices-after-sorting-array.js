/**
 * @see https://leetcode.com/problems/find-target-indices-after-sorting-array
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const targetIndices = (nums, target) => {
  const sortedNums = nums.sort((a, b) => a - b)

  const result = []

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] > target) break

    if (sortedNums[i] === target) result.push(i)
  }

  return result
}

console.log(targetIndices([1, 2, 5, 2, 3], 2))
console.log(targetIndices([1, 2, 5, 2, 3], 3))
console.log(targetIndices([1, 2, 5, 2, 3], 5))
