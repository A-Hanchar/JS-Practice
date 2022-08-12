/**
 * @see https://leetcode.com/problems/implement-strstr
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => (needle.length ? haystack.indexOf(needle) : 0)

console.log(strStr('hello', 'll'))
console.log(strStr('aaaaa', 'bba'))
