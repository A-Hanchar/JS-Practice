/**
 * @see https://leetcode.com/problems/check-if-n-and-its-double-exist
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = arr => {
  const set = new Set()

  for (const element of arr) {
    const currValue = element

    if (set.has(currValue)) {
      return true
    }

    set.add(currValue / 2)
    set.add(currValue * 2)
  }

  return false
}

console.log(checkIfExist([10, 2, 5, 3]))
console.log(checkIfExist([7, 1, 14, 11]))
console.log(checkIfExist([3, 1, 7, 11]))
