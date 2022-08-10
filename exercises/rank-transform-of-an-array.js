/**
 * @see https://leetcode.com/problems/rank-transform-of-an-array
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = arr => {
  const copyArr = [...arr]
  copyArr.sort((a, b) => a - b)

  const uniqSortedArr = [...new Set(copyArr)]

  const result = []

  for (const number of arr) {
    const idx = uniqSortedArr.indexOf(number)

    result.push(idx + 1)
  }

  return result
}

console.log(arrayRankTransform([40, 10, 20, 30]))
console.log(arrayRankTransform([100, 100, 100]))
console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]))
