/**
 * @see https://leetcode.com/problems/pascals-triangle
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
  if (numRows === 0) return []

  const result = [[1]]

  for (let i = 1; i < numRows; i++) {
    const prevRow = result[i - 1]

    const newRow = []

    for (let j = 0; j <= prevRow.length; j++) {
      const prev = prevRow[j - 1] ?? 0
      const current = prevRow[j] ?? 0

      newRow.push(prev + current)
    }

    result.push(newRow)
  }

  return result
}

console.log(generate(5))
console.log(generate(1))

/**
 * 1
 * 1-1
 * 1-2-1
 * 1-3-3-1
 * 1-4-6-4-1
 * 1-5-10-10-5-1
 * 1-6-15-20-15-6-1
 */
