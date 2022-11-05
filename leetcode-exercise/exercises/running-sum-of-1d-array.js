/**
 * @see https://leetcode.com/problems/running-sum-of-1d-array/
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = nums => {
  // for (let i = 1; i < nums.length; i++) {
  //   nums[i] = nums[i] + nums[i-1]
  // }

  // return nums

  let sum = nums[0]

  const result = [sum]

  for (let i = 1; i < nums.length; i++) {
    result.push(nums[i] + sum)

    sum += nums[i]
  }

  return result
}

console.log(runningSum([1, 2, 3, 4]))
console.log(runningSum([1, 1, 1, 1, 1]))
console.log(runningSum([3, 1, 2, 10, 1]))
