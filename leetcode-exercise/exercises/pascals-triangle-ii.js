/**
 * @see https://leetcode.com/problems/pascals-triangle-ii
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = rowIndex => {
  const result = [[1]]

  for (let i = 1; i <= rowIndex; i++) {
    const prevRow = result[i - 1]

    const newRow = []

    for (let j = 0; j <= prevRow.length; j++) {
      const prev = prevRow[j - 1] ?? 0
      const current = prevRow[j] ?? 0

      newRow.push(prev + current)
    }

    result.push(newRow)
  }

  return result[rowIndex]
}

console.log(getRow(3))
console.log(getRow(0))
console.log(getRow(1))

/**
 * 1
 * 1-1
 * 1-2-1
 * 1-3-3-1
 * 1-4-6-4-1
 * 1-5-10-10-5-1
 * 1-6-15-20-15-6-1
 * 1-7-21-35-35-21-7-1
 */
