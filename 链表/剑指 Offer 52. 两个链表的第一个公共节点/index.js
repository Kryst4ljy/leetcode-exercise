/**
 * 剑指 Offer 52. 两个链表的第一个公共节点
 * 输入两个链表，找出它们的第一个公共节点。
 *
 *
 * 解题思路：
 * 递归，用 map 存储遍历到的节点
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const map = new Map();
  let res = null;

  dfs(headA, headB);
  function dfs(node1, node2) {
    if (node1 === null && node2 === null) return;
    if (node1 !== null && map.has(node1)) {
      res = node1;
      return;
    } else if (node1 !== null) {
      map.set(node1, 1);
    }
    if (node2 !== null && map.has(node2)) {
      res = node2;
      return;
    } else if (node2 !== null) {
      map.set(node2, 1);
    }
    dfs(node1 === null ? null : node1.next, node2 === null ? null : node2.next);
  }

  return res;
};
