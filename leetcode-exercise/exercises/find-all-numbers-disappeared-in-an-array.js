/**
 * @see https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = nums => {
  const emptyArray = new Array(nums.length)

  for (const num of nums) {
    emptyArray[num - 1] = num
  }

  const result = []

  for (let i = 0; i < emptyArray.length; i++) {
    if (!emptyArray[i]) result.push(i + 1)
  }

  return result
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(findDisappearedNumbers([1, 1]))
