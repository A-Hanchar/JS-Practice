/**
 * @see https://leetcode.com/problems/happy-number
 * @param {number} n
 * @return {boolean}
 */
const isHappy = n => {
  if (n === 1) return true

  while (n !== 1) {
    n = [...`${n}`].reduce((acc, current) => acc + current ** 2, 0)

    if (n === 1) return true
    if (n === 4) return false
  }
}

console.log(isHappy(19))
console.log(isHappy(2))

/**
 * 2
 * 4
 * 16
 * 37
 * 58
 * 89
 * 145
 * 42
 * 20
 * 4
 * ...
 */

/**
 * 3
 * 9
 * 81
 * 65
 * 61
 * 37
 * 58
 * 89
 * 145
 * 42
 * 20
 * 4
 * ...
 */

/**
 * 5
 * 25
 * 29
 * 85
 * 89
 * 145
 * 42
 * 20
 * 4
 * ...
 */

/**
 * 6
 * 36
 * 45
 * 41
 * 17
 * 50
 * 25
 * ...
 */

/**
 * 7
 * 49
 * 97
 * 130
 * 10
 * 1
 */

/**
 * 8
 * 64
 * 52
 * 29
 * 85
 *
 */
