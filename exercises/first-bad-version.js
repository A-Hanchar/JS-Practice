/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @see https://leetcode.com/problems/first-bad-version
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = isBadVersion => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1
    let end = n

    do {
      const middle = Math.floor((start + end) / 2)
      const isMiddleBadVersion = isBadVersion(middle)

      console.log({ start, end, middle, isMiddleBadVersion })

      if (isMiddleBadVersion) {
        end = middle

        continue
      }

      start = middle + 1
    } while (start !== end)

    return start
  }
}

const solution4 = solution(version => version >= 4)

console.log(solution4(5))
