/**
 * @see https://leetcode.com/problems/single-number-ii
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
  const numsMap = new Map()

  for (const num of nums) {
    const countOfNum = numsMap.get(num) ?? 0

    if (countOfNum === 2) continue

    numsMap.set(num, countOfNum + 1)
  }

  for (let entrtyes of numsMap) {
    if (entrtyes[1] === 1) return entrtyes[0]
  }
}

console.log(singleNumber([2, 2, 3, 2]))
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]))
