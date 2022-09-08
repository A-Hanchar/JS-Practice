/**
 * @see https://leetcode.com/problems/find-triangular-sum-of-an-array
 * @param {number[]} nums
 * @return {number}
 */
const triangularSum = nums => {
  if (nums.length === 1) return nums[0]

  while (true) {
    const numsLenght = nums.length

    for (let i = 1; i < numsLenght; i++) {
      const prev = nums[i - 1]
      const current = nums[i]

      nums.push((prev + current) % 10)
    }

    nums.splice(0, numsLenght)

    if (nums.length === 1) return nums[0]
  }
}

console.log(triangularSum([1, 2, 3, 4, 5]))
console.log(triangularSum([5]))
