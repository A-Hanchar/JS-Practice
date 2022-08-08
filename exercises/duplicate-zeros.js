/**
 * @see https://leetcode.com/problems/duplicate-zeros
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = arr => {
  const lenArr = arr.length

  let index = 0

  while (index < lenArr) {
    if (arr[index] === 0) {
      arr.splice(index, 0, 0)

      index += 2

      continue
    }

    index++
  }

  arr.splice(lenArr)

  console.log(lenArr, arr)
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))
console.log(duplicateZeros([1, 2, 3]))
