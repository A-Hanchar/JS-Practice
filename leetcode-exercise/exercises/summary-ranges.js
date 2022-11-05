/**
 * @see https://leetcode.com/problems/summary-ranges
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = nums => {
  const result = []

  let right = null

  let range = 0

  let idx = 0

  while (idx < nums.length) {
    if (nums[idx] + 1 === nums[idx + 1]) {
      right = nums[idx + 1]

      range++
      idx++
      continue
    }

    right = nums[idx]
    const left = right - range

    left === right ? result.push(`${left}`) : result.push(`${left}->${right}`)

    idx++
    range = 0
  }

  return result
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]))
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))
