/**
 * @see https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
  const numsArrayLength = nums.length
  const result = []

  if (numsArrayLength <= 2) {
    return result
  }

  if (numsArrayLength === 3) {
    const sum = nums.reduce((acc, num) => acc + num, 0)

    return sum === 0 ? [nums] : result
  }

  nums.sort((a, b) => a - b)
  
  const maxNum = nums.at(-1)

  if (maxNum < 0) {
    return result
  }

  for (let i = 0; i < numsArrayLength; i++) {
    const firstNum = nums[i]

    if (firstNum > 0) {
      break
    }

    if (firstNum === nums[i - 1]) {
      continue
    }

    let secondNumIndex = i + 1
    let thirdNumIndex = numsArrayLength - 1

    while (secondNumIndex < thirdNumIndex) {
      const secondNum = nums[secondNumIndex]
      const thirdNum = nums[thirdNumIndex]

      const sum = firstNum + secondNum + thirdNum

      if (sum === 0) {
        result.push([firstNum, secondNum, thirdNum])
        secondNumIndex++
        thirdNumIndex--

        while (
          secondNumIndex < thirdNumIndex &&
          nums[secondNumIndex] === nums[secondNumIndex - 1]
        ) {
          secondNumIndex++
        }

        while (secondNumIndex < thirdNumIndex && nums[thirdNumIndex] === nums[thirdNumIndex + 1]) {
          thirdNumIndex--
        }
      }

      if (sum > 0) {
        thirdNumIndex--
      }

      if (sum < 0) {
        secondNumIndex++
      }
    }
  }

  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]))
console.log(threeSum([0, 0, 0]))

console.log(threeSum([3, -2, 1, 0]))

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))

console.log(
  threeSum([
    12, 5, -12, 4, -11, 11, 2, 7, 2, -5, -14, -3, -3, 3, 2, -10, 9, -15, 2, 14, -3, -15, -3, -14,
    -1, -7, 11, -4, -11, 12, -15, -14, 2, 10, -2, -1, 6, 7, 13, -15, -13, 6, -10, -9, -14, 7, -12,
    3, -1, 5, 2, 11, 6, 14, 12, -10, 14, 0, -7, 11, -10, -7, 4, -1, -12, -13, 13, 1, 9, 3, 1, 3, -5,
    6, 9, -4, -2, 5, 14, 12, -5, -6, 1, 8, -15, -10, 5, -15, -2, 5, 3, 3, 13, -8, -13, 8, -5, 8, -6,
    11, -12, 3, 0, -2, -6, -14, 2, 0, 6, 1, -11, 9, 2, -3, -6, 3, 3, -15, -5, -14, 5, 13, -4, -4,
    -10, -10, 11,
  ]),
)
