/**
 * @see https://leetcode.com/problems/longest-continuous-increasing-subsequence
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = nums => {
  let neededLength = 1
  let tempLength = 0

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]
    const prev = nums[i - 1]

    if (i === 0 || current > prev) {
      tempLength += 1
    } else {
      tempLength = 1
    }

    neededLength = Math.max(neededLength, tempLength)
  }

  return neededLength
}

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]))
console.log(findLengthOfLCIS([1, 3, 5, 7]))
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]))
