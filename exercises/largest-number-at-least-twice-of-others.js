/**
 * @see https://leetcode.com/problems/largest-number-at-least-twice-of-others
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = nums => {
  const sortedNums = [...nums].sort((a, b) => a - b)

  const largestNum = sortedNums.at(-1)
  const prevLargestNum = sortedNums.at(-2)

  return prevLargestNum * 2 <= largestNum ? nums.indexOf(largestNum) : -1
}

console.log(dominantIndex([3, 6, 1, 0]))
console.log(dominantIndex([1, 2, 3, 4]))
