/**
 * @see https://leetcode.com/problems/intersection-of-two-arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  const checkedNumbers = new Set()

  const result = []

  for (const element of nums1) {
    if (checkedNumbers.has(element)) continue

    if (nums2.includes(element)) result.push(element)

    checkedNumbers.add(element)
  }

  return result
}

console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
