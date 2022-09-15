/**
 * @see https://leetcode.com/problems/binary-search
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let startIndex = 0
  let endIndex = nums.length - 1

  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2)

    const middleValue = nums[middleIndex]

    if (middleValue === target) return middleIndex

    if (middleValue < target) {
      startIndex = middleIndex + 1
    }

    if (middleValue > target) {
      endIndex = middleIndex - 1
    }
  }

  return -1
  //       let startIndex = 0
  //   let endIndex = nums.length - 1

  //   do {
  //     const middleIndex = Math.floor((startIndex + endIndex) / 2)

  //     const middleValue = nums[middleIndex]

  //     if(middleValue === target) return middleIndex

  //     if(startIndex === endIndex) return -1

  //     if(middleValue > target) {
  //       endIndex = middleIndex
  //     }

  //     if(middleValue < target ) {
  //       startIndex = middleIndex + 1
  //     }

  //   } while (true);
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([-1, 0, 3, 5, 9, 12], 2))
