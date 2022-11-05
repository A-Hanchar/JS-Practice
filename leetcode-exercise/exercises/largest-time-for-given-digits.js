/**
 * @see https://leetcode.com/problems/largest-time-for-given-digits
 * @param {number[]} arr
 * @return {string}
 */
const largestTimeFromDigits = arr => {
  const sortedArr = arr.sort((a, b) => a - b)

  for (let hh = 23; hh >= 0; hh--) {
    const hhStr = hh >= 10 ? `${hh}` : `0${hh}`
    const hhArr = hhStr.split('').map(hhStr => Number(hhStr))

    for (let mm = 59; mm >= 0; mm--) {
      const mmStr = mm >= 10 ? `${mm}` : `0${mm}`
      const mmArr = mmStr.split('').map(mmStr => Number(mmStr))

      const timeArr = [...hhArr, ...mmArr].sort((a, b) => a - b)

      if (JSON.stringify(sortedArr) === JSON.stringify(timeArr)) {
        return `${hhStr}:${mmStr}`
      }
    }
  }

  return ''
}

console.log(largestTimeFromDigits([0, 0, 1, 0]))
console.log(largestTimeFromDigits([1, 2, 3, 4]))
console.log(largestTimeFromDigits([2, 3, 5, 9]))
console.log(largestTimeFromDigits([1, 2, 3, 4]))
