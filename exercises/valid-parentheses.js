/**
 * @see https://leetcode.com/problems/valid-parentheses
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const opened = ['(', '[', '{']

  const opendBrakets = []

  for (const bracket of s) {
    if (opened.includes(bracket)) {
      opendBrakets.push(bracket)

      continue
    }

    if (
      (opendBrakets.at(-1) === '(' && bracket === ')') ||
      (opendBrakets.at(-1) === '{' && bracket === '}') ||
      (opendBrakets.at(-1) === '[' && bracket === ']')
    ) {
      opendBrakets.pop()
      continue
    }

    return false
  }

  return !opendBrakets.length
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('(((([]))))'))
console.log(isValid(']'))
