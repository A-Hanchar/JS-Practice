/**
 * @see https://leetcode.com/problems/sort-even-and-odd-indices-independently
 * @param {number[]} nums
 * @return {number[]}
 */
const sortEvenOdd = nums => {
  const odds = []
  const even = []

  for (let i = 0; i < nums.length; i++) {
    i % 2 === 0 ? even.push(nums[i]) : odds.push(nums[i])
  }

  odds.sort((a, b) => b - a)
  even.sort((a, b) => a - b)

  const result = []

  const maxLength = Math.max(odds.length, even.length)

  for (let i = 0; i < maxLength; i++) {
    if (even[i]) result.push(even[i])
    if (odds[i]) result.push(odds[i])
  }

  return result
}

console.log(sortEvenOdd([4, 1, 2, 3]))
console.log(sortEvenOdd([2, 1]))
