/**
 * @see https://leetcode.com/problems/count-square-sum-triples
 * @param {number} n
 * @return {number}
 */
const countTriples = n => {
  let countPairs = 0

  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      const c = Math.sqrt(a ** 2 + b ** 2)

      if (a === b || c > n) break

      if (Number.isInteger(c)) countPairs++
    }
  }

  return countPairs * 2
}

console.log(countTriples(5))
console.log(countTriples(10))
