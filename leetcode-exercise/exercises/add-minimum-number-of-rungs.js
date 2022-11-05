/**
 * @see https://leetcode.com/problems/add-minimum-number-of-rungs/
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
const addRungs = (rungs, dist) => {
  let result = 0

  let current = 0
  let next = rungs[0]

  let countSteps = -1

  do {
    const distance = next - current
    
    if (distance > dist) {
      const notEnough = Math.floor(distance / dist)

      result += notEnough

      if(distance % dist === 0) {
        result--
      }
    }

    countSteps++
    current = rungs[countSteps]
    next = rungs[countSteps + 1]
  } while (countSteps < rungs.length - 1);

  return result
}

console.log(addRungs([1, 3, 5, 10], 2))
console.log(addRungs([3, 6, 8, 10], 3))
console.log(addRungs([3, 4, 6, 7], 2))
console.log(addRungs([3], 1))
console.log(addRungs([4,8,12,16], 3))
console.log(addRungs([12,24], 4))
