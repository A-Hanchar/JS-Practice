/**
 * @see https://leetcode.com/problems/find-pivot-index
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = nums => {
  let left = 0
  let right = nums.reduce((acc, current) => acc + current, 0)

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]

    right -= current

    if (left === right) return i

    left += current
  }

  return -1
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([2, 1, -1]))
