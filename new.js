/**
 * @see
 * @param {string} s
 * @return {number}
 */
const minimumMoves = s => {
  let steps = 0

  let idx = 0

  while(idx < s.length) {
    const firstLetter = s[idx] ?? ''

    if(firstLetter === 'O') {
      idx++
      continue
    }

    const secondLetter = s[idx + 1] ?? ''
    const thirdLetter = s[idx + 2] ?? ''

    const checkStr = firstLetter + secondLetter + thirdLetter

    if(checkStr.includes('X')) steps++

    idx += 3
  }
  
  // for (let i = 0; i < s.length; i += 3) {
  //   const firstLetter = s[i] ?? ''
  //   const secondLetter = s[i + 1] ?? ''
  //   const thirdLetter = s[i + 2] ?? ''

  //   const checkStr = firstLetter + secondLetter + thirdLetter

  //   if(checkStr.includes('X')) steps++
  // }

  return steps
}

console.log(minimumMoves('XXX'))
console.log(minimumMoves('XXOX'))
console.log(minimumMoves('OOOO'))
console.log(minimumMoves('OXOX'))
