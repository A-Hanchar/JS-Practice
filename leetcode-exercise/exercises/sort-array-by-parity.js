/**
 * @see https://leetcode.com/problems/sort-array-by-parity
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = nums => {
  const result = []

  nums.forEach(num => (num % 2 === 0 ? result.unshift(num) : result.push(num)))

  return result
}

console.log(sortArrayByParity([3, 1, 2, 4]))
console.log(sortArrayByParity([0]))
