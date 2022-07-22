/**
 * @see https://leetcode.com/problems/contains-duplicate
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
  // const uniqNums = [...new Set(nums)]

  // return uniqNums.length !== nums.length

  const set = new Set()

  for (const num of nums) {
    if (set.has(num)) {
      return true
    }

    set.add(num)
  }

  return false
}

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
