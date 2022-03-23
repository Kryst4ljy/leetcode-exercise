/**
 * 82. 删除排序链表中的重复元素 II
 * 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
 *
 *
 * 解题思路：
 * 1. 一个 index 指示上一个出现的数，如果出现重复数，则需要清除 map 中存储的这个值。
 * 2. 整合 map 存储的所有节点。
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let map = new Map();
  let index = undefined;

  dfs(head);
  function dfs(node) {
    if (node === null) return;
    let next = node.next;
    if (node.val !== index) {
      // 未记录过此值
      index = node.val;
      node.next = null;
      map.set(node.val, node);
    } else {
      map.delete(node.val);
    }
    dfs(next);
  }

  let current = null;
  let res = null;
  map.forEach((m) => {
    if (current === null) {
      current = m;
      res = m;
    } else {
      current.next = m;
      current = m;
    }
  });

  return res;
};
