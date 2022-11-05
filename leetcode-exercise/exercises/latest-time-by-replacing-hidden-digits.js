/**
 * @see https://leetcode.com/problems/latest-time-by-replacing-hidden-digits
 * @param {string} time
 * @return {string}
 */
const maximumTime = time => {
  const zero = '0'
  const one = '1'
  const two = '2'
  const three = '3'
  const five = '5'
  const nine = '9'
  const questionMark = '?'

  const getTimeValue = (checkValue, newValue) =>
    checkValue === questionMark ? newValue : checkValue

  let hh1 = getTimeValue(time[0], two)
  let hh2 = time[1]

  if (hh2 === questionMark) {
    switch (hh1) {
      case zero:
      case one:
        hh2 = nine
        break
      case two:
        hh2 = three
    }
  }

  if (hh1 === two && ![zero, one, two, three].includes(hh2)) {
    hh1 = one
  }

  const mm1 = getTimeValue(time[3], five)
  const mm2 = getTimeValue(time[4], nine)

  return `${hh1}${hh2}:${mm1}${mm2}`
}

console.log(maximumTime('2?:?0'))
console.log(maximumTime('0?:3?'))
console.log(maximumTime('1?:22'))
console.log(maximumTime('?4:03'))
