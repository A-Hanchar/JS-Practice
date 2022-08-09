/**
 * @see https://leetcode.com/problems/find-lucky-integer-in-an-array
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = arr => {
  arr.sort((a, b) => b - a)

  const mapNums = new Map()

  arr.forEach(num => {
    const countOfNum = mapNums.get(num) ?? 0

    mapNums.set(num, countOfNum + 1)
  })

  for (const mapNumEntry of mapNums) {
    if (mapNumEntry[0] === mapNumEntry[1]) return mapNumEntry[0]
  }

  return -1
}

console.log(findLucky([2, 2, 3, 4]))
console.log(findLucky([1, 2, 2, 3, 3, 3]))
console.log(findLucky([2, 2, 2, 3, 3]))
