/**
 * @see https://leetcode.com/problems/four-divisors
 * @param {number[]} nums
 * @return {number}
 */
const sumFourDivisors = nums => {
  const divisorsArr = []
  const numsWithDivisors = {}

  for (let num of nums) {
    const isCashDivisors = numsWithDivisors[num]
    if (isCashDivisors) {
      if (isCashDivisors.length === 4) {
        divisorsArr.push(...isCashDivisors)
      }

      continue
    }

    const divisors = [1, num]

    for (let i = 2; i <= Math.floor(num / 2); i++) {
      if (num % i === 0) {
        divisors.push(i)
      }

      if (divisors.length > 4) {
        break
      }
    }

    numsWithDivisors[num] = divisors

    if (divisors.length === 4) {
      divisorsArr.push(...divisors)
    }
  }

  return divisorsArr.reduce((prev, current) => prev + current, 0)
}

console.log(sumFourDivisors([21, 4, 7]))
console.log(sumFourDivisors([21, 21]))
console.log(sumFourDivisors([1, 2, 3, 4, 5]))
