/**
 * @see https://leetcode.com/problems/two-out-of-three
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
const twoOutOfThree = (nums1, nums2, nums3) => {
  const uniqNums1 = [...new Set(nums1)]
  const uniqNums2 = [...new Set(nums2)]
  const uniqNums3 = [...new Set(nums3)]

  const result = new Set()

  uniqNums1.forEach(number => {
    if (uniqNums2.includes(number) || uniqNums3.includes(number)) {
      result.add(number)
    }
  })

  uniqNums2.forEach(number => {
    if (uniqNums3.includes(number)) {
      result.add(number)
    }
  })

  return [...result]
}

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]))
console.log(twoOutOfThree([3, 1], [2, 3], [1, 2]))
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5]))
