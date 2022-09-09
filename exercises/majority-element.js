/**
 * @see https://leetcode.com/problems/majority-element
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
  const countsOfNums = new Map()

  let maxSize = -Infinity
  let result = -Infinity

  for (let num of nums) {
    const countNum = countsOfNums.get(num) ?? 0

    if (countNum > maxSize) {
      maxSize = countNum

      result = num
    }

    countsOfNums.set(num, countNum + 1)
  }

  return result
}

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
