/**
 * 86. 分隔链表
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 *
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 *
 *
 *
 * 解题思路：
 * 1. 遍历链表，小的节点存在一个数组中，大于等于的节点存在一个数组中。
 * 2. 组合数组，遍历数组进行组合链表。
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const path1 = [];
  const path2 = [];

  // 1. 递归切割链表 小于的存在 path1，大于等于的存在 path2
  dfs(head);
  function dfs(node) {
    if (node === null) return;
    let next = node.next;
    node.next = null;
    if (node.val < x) {
      path1.push(node);
    } else {
      path2.push(node);
    }
    dfs(next);
  }

  // 2. 组合
  const path = path1.concat(path2);
  for (let i = 0; i < path.length - 1; i++) {
    path[i].next = path[i + 1];
  }
  return path[0] === undefined ? null : path[0];
};
