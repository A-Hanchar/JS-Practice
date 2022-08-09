/**
 * @see https://leetcode.com/problems/day-of-the-year
 * @param {string} date
 * @return {number}
 */
const dayOfYear = date => {
  const year = new Date(date).getFullYear()

  const timeStart = new Date(`${year}-01-01`).getTime()
  const timeFinish = new Date(date).getTime()

  return (timeFinish - timeStart) / (1000 * 3600 * 24) + 1
}

console.log(dayOfYear('2019-01-09'))
console.log(dayOfYear('2019-02-11'))
