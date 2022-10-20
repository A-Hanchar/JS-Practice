function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @see https://leetcode.com/problems/remove-duplicates-from-sorted-list
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = head => {
  if (head === null || head.next === null) {
    return head
  }

  let current = head

  while (current != null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return current
}
