/**
 * @see https://leetcode.com/problems/largest-3-same-digit-number-in-string
 * @param {string} num
 * @return {string}
 */
const largestGoodInteger = num => {
  let max = -Infinity

  for (let i = 0; i <= num.length - 3; i++) {
    const current = num[i]
    const next = num[i + 1]
    const nextNext = num[i + 2]

    if (current === next && current === nextNext && next === nextNext) {
      max = Math.max(max, current)
    }
  }

  return isFinite(max) ? `${max}${max}${max}` : ''
}

console.log(largestGoodInteger('6777133339'))
console.log(largestGoodInteger('2300019'))
console.log(largestGoodInteger('42352338'))
