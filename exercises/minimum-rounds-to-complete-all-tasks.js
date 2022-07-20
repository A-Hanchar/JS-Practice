/**
 * @see https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/
 * @param {number[]} tasks
 * @return {number}
 */
const minimumRounds = tasks => {
  const tasksWithCount = {}

  tasks.forEach(task => {
    let count = tasksWithCount[task] ?? 0

    tasksWithCount[task] = ++count
  })

  let result = 0

  for (let [, count] of Object.entries(tasksWithCount)) {
    while (count > 0) {
      if (count > 5) {
        count -= 3
        result++

        continue
      }

      switch (count) {
        case 5:
        case 4:
          result += 2
          break
        case 3:
        case 2:
          result++
          break
        case 1:
          return -1
      }

      break
    }
  }

  return result
}

// console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]))
// console.log(minimumRounds([2, 3, 3]))
// console.log(minimumRounds([7, 7, 7, 7, 7, 7]))
// console.log(
//   minimumRounds([
//     69, 65, 62, 64, 70, 68, 69, 67, 60, 65, 69, 62, 65, 65, 61, 66, 68, 61, 65, 63, 60, 66, 68, 66,
//     67, 65, 63, 65, 70, 69, 70, 62, 68, 70, 60, 68, 65, 61, 64, 65, 63, 62, 62, 62, 67, 62, 62, 61,
//     66, 69,
//   ]),
// )
console.log(
  minimumRounds([
    66, 66, 63, 61, 63, 63, 64, 66, 66, 65, 66, 65, 61, 67, 68, 66, 62, 67, 61, 64, 66, 60, 69, 66,
    65, 68, 63, 60, 67, 62, 68, 60, 66, 64, 60, 60, 60, 62, 66, 64, 63, 65, 60, 69, 63, 68, 68, 69,
    68, 61,
  ]),
)
