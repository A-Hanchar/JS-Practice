/**
 * @see https://leetcode.com/problems/relative-sort-array/
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = (arr1, arr2) => {
  const numbersCount = {}

  arr1.forEach(number => {
    let count = numbersCount[number] ?? 0

    numbersCount[number] = ++count
  })

  const result = []

  const addNumbersToResult = (tailLength, value) => {
    const arrTail = Array(tailLength).fill(Number(value))
    result.push(...arrTail)
  }

  arr2.forEach(number => {
    addNumbersToResult(numbersCount[number], number)
    delete numbersCount[number]
  })

  for (const [number, count] of Object.entries(numbersCount)) {
    addNumbersToResult(count, number)
  }

  return result
}

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]))
console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]))
