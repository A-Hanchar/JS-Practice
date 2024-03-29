/**
 * @see https://leetcode.com/problems/single-number
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i]
    }
  }
}

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([1]))
