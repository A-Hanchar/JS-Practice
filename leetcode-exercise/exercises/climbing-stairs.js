/**
 * @see https://leetcode.com/problems/climbing-stairs/
 * @solve it the same as fibonacci numbers
 * @param {number} n
 * @return {number}
 */
 const climbStairs = n => {
  if (n == 1 || n == 0) return 1
  let first = 1
  let second = 2

  for (let i = 3; i <= n; i++) {
    let third = first + second
    first = second
    second = third
  }

  return second
}

console.log(climbStairs(2), 2)
console.log(climbStairs(3), 3)
console.log(climbStairs(10), 89)
console.log(climbStairs(9), 55)
