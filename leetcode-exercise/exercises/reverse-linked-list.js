// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @see https://leetcode.com/problems/reverse-linked-list
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
  let reversedList = null
  let tempPtr = null

  while (head != null) {
    tempPtr = head.next

    head.next = reversedList
    reversedList = head

    head = tempPtr
  }

  return reversedList
}

console.log(reverseList([1, 2, 3, 4, 5]))
// console.log(reverseList([1, 2]))
// console.log(reverseList([]))
