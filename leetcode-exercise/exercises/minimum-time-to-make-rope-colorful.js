/**
 * @see https://leetcode.com/problems/minimum-time-to-make-rope-colorful
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
const minCost = (colors, neededTime) => {
  let time = 0

  let index = 0

  while (index < colors.length) {
    const current = colors[index]
    const currentTime = neededTime[index]

    const times = [currentTime]
    let maxTime = currentTime

    for (let j = index + 1; j < colors.length; j++) {
      if (current !== colors[j]) break

      const nextTime = neededTime[j]

      times.push(nextTime)
      if (nextTime > maxTime) maxTime = nextTime

      index++
    }

    if (times.length === 1) {
      index++

      continue
    }

    const sumTime = times.reduce((prev, current) => prev + current, 0) - maxTime
    time += sumTime
    index++
  }

  return time
}

// console.log(minCost('abaac', [1, 2, 3, 4, 5]))
// console.log(minCost('abc', [1, 2, 3]))
// console.log(minCost('aabaa', [1, 2, 3, 4, 1]))
console.log(minCost('bbbaaa', [4, 9, 3, 8, 8, 9]))
