/**
 * @see https://leetcode.com/problems/search-insert-position
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let left = 0
  let right = nums.length

  while (left < right) {
    const middle = Math.floor((left + right) / 2)

    if (nums[middle] < target) {
      left = middle + 1
    } else {
      right = middle
    }
  }

  return left
}

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
