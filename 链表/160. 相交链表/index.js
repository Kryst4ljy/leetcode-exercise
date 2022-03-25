/**
 * 160. 相交链表
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
 *
 *
 * 解题思路：
 * map 存储所有遍历到的节点，遇到重复的返回结果。
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
    if ((node1 === null && node2 === null) || res !== null) return;
    let next1 = null;
    let next2 = null;
    // 处理左节点
    if (node1 !== null) {
      next1 = node1.next;
      if (map.has(node1)) {
        res = node1;
        return;
      } else {
        map.set(node1, 1);
      }
    }
    // 处理右节点
    if (node2 !== null) {
      next2 = node2.next;
      if (map.has(node2)) {
        res = node2;
        return;
      } else {
        map.set(node2, 1);
      }
    }
    dfs(next1, next2);
  }

  return res;
};
