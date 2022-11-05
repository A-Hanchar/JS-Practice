/**
 * @see https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = arr => {
  arr.sort((a, b) => a - b)

  const diff = arr[1] - arr[0]

  for (let i = 2; i < arr.length; i++) {
    const prev = arr[i - 1]
    const current = arr[i]

    if (current - prev !== diff) return false
  }

  return true
}

console.log(canMakeArithmeticProgression([3, 5, 1]))
console.log(canMakeArithmeticProgression([1, 2, 4]))
