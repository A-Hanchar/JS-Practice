/**
 * @see https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
const busyStudent = (startTime, endTime, queryTime) => {
  let result = 0

  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      result++
    }
  }

  return result
}

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4))
console.log(busyStudent([4], [4], 4))
