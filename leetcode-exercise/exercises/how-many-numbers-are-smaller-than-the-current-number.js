/**
 * @see https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = nums => {
  const chekedNumbers = new Map()
  const result = []

  for (let i = 0; i < nums.length; i++) {
    if (chekedNumbers.has(nums[i])) {
      const countLess = chekedNumbers.get(nums[i])

      result.push(countLess)
      continue
    }

    let countLess = 0

    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue
      }

      if (nums[i] > nums[j]) {
        countLess++
      }
    }

    result.push(countLess)
    chekedNumbers.set(nums[i], countLess)
  }

  return result
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]))
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]))
