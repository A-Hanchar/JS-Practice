/**
 * @see https://leetcode.com/problems/keep-multiplying-found-values-by-two
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
const findFinalValue = (nums, original) => {
  const sortedNums = nums.sort((a, b) => a - b)
  let result = original

  for (const num of sortedNums) {
    if (num === result) result *= 2
  }

  return result
}

console.log(findFinalValue([5, 3, 6, 1, 12], 3))
console.log(findFinalValue([2, 7, 9], 4))
console.log(findFinalValue([8, 19, 4, 2, 15, 3], 2))
