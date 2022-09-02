/**
 * @see https://leetcode.com/problems/rotate-string
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = (s, goal) => {
  let countCicle = s.length

  while (countCicle) {
    s = s.slice(1) + s[0]

    if (s === goal) return true

    countCicle--
  }

  return false
}

console.log(rotateString('abcde', 'cdeab'))
console.log(rotateString('abcde', 'abced'))
