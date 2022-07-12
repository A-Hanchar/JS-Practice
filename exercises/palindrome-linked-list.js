/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @see https://leetcode.com/problems/palindrome-linked-list/
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = head => {
  const headAsArray = []

  while (head !== null) {
    headAsArray.push(head.val)

    head = head.next
  }

  const headAsArrayLength = headAsArray.length

  if (headAsArrayLength === 0) {
    return false
  }

  if (headAsArrayLength === 1) {
    return true
  }

  let start = 0
  let end = headAsArrayLength - 1

  do {
    if (headAsArray[start] !== headAsArray[end]) {
      return false
    }

    start++
    end--
  } while (start < end)

  return true
}

console.log(isPalindrome([1, 2, 2, 1]))
console.log(isPalindrome([1, 2]))
