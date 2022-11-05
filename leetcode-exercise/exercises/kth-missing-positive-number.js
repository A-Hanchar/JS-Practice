/**
 * @see https://leetcode.com/problems/kth-missing-positive-number
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = (arr, k) => {
  const missingNumbers = []

  if (arr[0] !== 1) {
    for (let i = 1; i < arr[0]; i++) {
      missingNumbers.push(i)
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (missingNumbers.length >= k) break

    const current = arr[i]
    const next = arr[i + 1]

    const distance = next - current

    if (distance >= 1) {
      for (let j = current + 1; j < next; j++) {
        missingNumbers.push(j)
      }
    }
  }

  if (missingNumbers.length < k) {
    const leftAdd = k - missingNumbers.length
    for (let i = 1; i <= leftAdd; i++) {
      missingNumbers.push(arr.at(-1) + i)
    }
  }

  return missingNumbers[k - 1]
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5))
console.log(findKthPositive([1, 2, 3, 4], 2))
