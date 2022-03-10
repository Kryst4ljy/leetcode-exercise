/**
 * 25. 合并两个排序的链表
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 *
 *
 * 解题思路：
 * 遇到排好序的 不论是链表还是数组还是啥 都要先考虑双指针
 *
 * 示例1：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 空处理
  if (!l1) return l2;
  if (!l2) return l1;

  let left = l1; // 左指针
  let right = l2; // 右指针
  let head = null; // 新链表
  let current = null; // 新链表当前指针

  // 遍历每个链表节点，直到某个链表的末节点
  while (left !== null && right !== null) {
    let nextNode = null;
    if (left.val <= right.val) {
      nextNode = left.next; // 保存下一节点
      left.next = null; // 断开链接
      if (head === null) {
        head = left;
        current = head;
      } else {
        current.next = left;
        current = current.next;
      }
      left = nextNode; // 指针后移
    } else {
      nextNode = right.next; // 保存下一节点
      right.next = null; // 断开链接
      if (head === null) {
        head = right;
        current = head;
      } else {
        current.next = right;
        current = current.next;
      }
      right = nextNode; // 指针后移
    }
  }

  // 整合余下链表
  if (left === null) {
    current.next = right;
  }
  if (right === null) {
    current.next = left;
  }

  return head;
};
