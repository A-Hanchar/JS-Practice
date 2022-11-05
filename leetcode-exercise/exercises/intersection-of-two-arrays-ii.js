/**
 * @see https://leetcode.com/problems/intersection-of-two-arrays-ii
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const notIntersection = {}

  const result = []

  let minLength = Math.min(nums1.length, nums2.length)

  const minLenghtArray = nums1.length === minLength ? nums1 : nums2
  const maxLenghtArray = nums1.length === minLength ? nums2 : nums1

  while (minLength) {
    const checkedNum = minLenghtArray[minLength - 1]

    if (notIntersection[checkedNum]) {
      minLength--
      continue
    }

    const idxInMaxArr = maxLenghtArray.indexOf(checkedNum)

    if (idxInMaxArr === -1) {
      notIntersection[checkedNum] = true

      minLength--
      continue
    }

    result.push(checkedNum)

    maxLenghtArray.splice(idxInMaxArr, 1)
    minLenghtArray.splice(minLength - 1, 1)

    minLength--
  }

  return result
}

console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
