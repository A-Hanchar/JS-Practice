/**
 * @see https://leetcode.com/problems/divide-array-into-equal-pairs
 * @param {number[]} nums
 * @return {boolean}
 */
const divideArray = nums => {
  const countNumbers = new Map()

  for (const num of nums) {
    const countOfNum = countNumbers.get(num) ?? 0

    countNumbers.set(num, countOfNum + 1)
  }

  for (const count of countNumbers.values()) {
    if (count % 2 !== 0) return false
  }

  return true
}

console.log(divideArray([3, 2, 3, 2, 2, 2]))
console.log(divideArray([1, 2, 3, 4]))
