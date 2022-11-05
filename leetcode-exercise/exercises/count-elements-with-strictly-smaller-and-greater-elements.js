/**
 * @see https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements
 * @param {number[]} nums
 * @return {number}
 */
const countElements = nums => {
  const sortedNums = nums.sort((a, b) => a - b)

  const max = sortedNums.at(-1)
  const min = sortedNums[0]

  return sortedNums.filter(num => num !== min && num !== max).length
}

console.log(countElements([11, 7, 2, 15]))
console.log(countElements([-3, 3, 3, 90]))
