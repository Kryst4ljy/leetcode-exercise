/**
 * 203. 移除链表元素
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 *
 *
 * 解题思路1：
 * 1. 遍历链表，将每个节点断开放入一个数组中，期间剔除 val 相等的节点。
 * 2. 再遍历一遍数组，将每个节点相连，返回数组第一个节点。
 * 时间复杂度：O(2n)
 *
 * 解题思路2：
 * 1. 确认头节点：先遍历一次链表，目的是为了找到不为 val 的头节点，因为有可能一开始就给一个 val 值的节点。
 * 2. 双指针法，接着 1 的遍历结果继续向下遍历，如果遇到 val 则递归遍历 next。如果遇到不是 val，则组合一次链表节点，重置状态，继续遍历。
 * 时间复杂度：O(n)
 *
 *
 * 示例：
 * 输入：head = [1,2,6,3,4,5,6], val = 6
 * 输出：[1,2,3,4,5]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let res = null;

  // 1. 确定头节点
  let current = head;
  while (current !== null) {
    if (current.val !== val) {
      res = current;
      break;
    } else {
      current = current.next;
    }
  }

  // 2. 剔除节点
  if (res !== null) {
    let next = current.next;
    current.next = null;
    while (next !== null) {
      if (next.val === val) {
        next = next.next;
      } else {
        current.next = next;
        current = next;
        next = current.next;
        current.next = null;
      }
    }
  }

  return res;
};
