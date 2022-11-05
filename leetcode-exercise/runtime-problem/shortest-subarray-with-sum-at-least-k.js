/**
 * @see https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const shortestSubarray = (nums, k) => {
  if (nums.length >= 1 && nums[0] === k) return 1

  let shortedSubArray = []

  let idx = 0

  while (idx < nums.length) {
    const currentNumber = nums[idx]
    const subArray = [currentNumber]

    let sum = currentNumber

    if (sum >= k) return 1

    for (let i = idx + 1; i < nums.length; i++) {
      subArray.push(nums[i])
      sum += nums[i]

      if (sum >= k) {
        if (subArray.length < shortedSubArray.length || !shortedSubArray.length)
          shortedSubArray = subArray

        break
      }

      if (sum < k) continue
    }

    idx++
  }

  return shortedSubArray.length ? shortedSubArray.length : -1
}

// console.log(shortestSubarray([1], 1))
// console.log(shortestSubarray([1, 2], 4))
// console.log(shortestSubarray([2, -1, 2], 3))
console.log(shortestSubarray([77, 19, 35, 10, -14], 19))
console.log(shortestSubarray([48, 99, 37, 4, -31], 140))
