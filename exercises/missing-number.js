/**
 * @see https://leetcode.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
  // 1-st solution
  // for(let i = 0; i <= nums.length; i++) {
  //   if(!nums.includes(i)) {
  //     return i
  //   }
  // }

  // 2-nd solution
  let expectedSum = (nums.length * (nums.length + 1)) / 2 // Gauss' formula
  let actualSum = nums.reduce((a, b) => a + b, 0)

  let missingNumber = expectedSum - actualSum

  return missingNumber
}

console.log(missingNumber([3, 0, 1]))
console.log(missingNumber([0, 1]))
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
