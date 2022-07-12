/**
 * @see https://leetcode.com/problems/sqrtx/
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
  if(x <= 1) {
    return x
  }

  if(x <= 3) {
    return 1
  }

  if(x < 9) {
    return 2
  }

  let start = 3
  let end = Math.floor(x / 2)

  while (start < end) {
    const middle = Math.floor((start + end) / 2)

    console.log(start, middle, end);

    const multi = middle * middle

    if (multi === x) {
      return middle
    }

    if(multi > x) {
      end = middle
    }

    if(multi < x) {
      start = middle + 1
    }
  }

  return start - 1
}

// console.log(mySqrt(5));
// console.log(mySqrt(25));
console.log(mySqrt(99));