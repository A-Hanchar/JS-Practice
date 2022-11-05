/**
 * @see https://leetcode.com/problems/max-consecutive-ones
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums => {
  let maxLine = 0
  let currentLine = 0

  for (const element of nums) {
    if (element === 1) {
      currentLine++
    } else {
      currentLine = 0
    }

    if (currentLine > maxLine) {
      maxLine = currentLine
    }
  }

  return maxLine
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]))
