/**
 * @see https://leetcode.com/problems/transpose-matrix
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = matrix => {
  const countX = matrix[0].length
  const result = []

  for (let i = 0; i < countX; i++) {
    const newArray = []

    for (const arr of matrix) {
      newArray.push(arr[i])
    }

    result.push(newArray)
  }

  return result
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
)
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ]),
)

/**
 * 1 2 3 4
 * 1 2 3 4
 * 1 2 3 4
 * 1 2 3 4
 * 1 2 3 4
 *
 *
 */
