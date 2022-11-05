/**
 * @see https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = nums => {
  let operations = 0

  if (nums.length === 1) return operations

  for (let i = 1; i < nums.length; i++) {
    const prevNum = nums[i - 1]
    const currentNum = nums[i]

    if (prevNum < currentNum) continue

    if (prevNum >= currentNum) {
      const newValue = prevNum - currentNum + 1
      nums[i] = currentNum + newValue

      operations += newValue
    }
  }

  return operations
}

console.log(minOperations([1, 1, 1]))
console.log(minOperations([1, 5, 2, 4, 1]))
console.log(minOperations([8]))
