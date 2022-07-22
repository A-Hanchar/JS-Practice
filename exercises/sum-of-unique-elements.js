/**
 * @see https://leetcode.com/problems/sum-of-unique-elements
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = nums => {
  const countOfNums = {}

  nums.forEach(num => {
    const count = countOfNums[num] ?? 0

    countOfNums[num] = count + 1
  })

  let sum = 0

  for (const [key, value] of Object.entries(countOfNums)) {
    if (value === 1) sum += Number(key)
  }

  return sum
}

console.log(sumOfUnique([1, 2, 3, 2]))
console.log(sumOfUnique([1, 1, 1, 1, 1]))
console.log(sumOfUnique([1, 2, 3, 4, 5]))
