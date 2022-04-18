/**
 * 19. 删除链表的倒数第 N 个结点
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 *
 *
 * 解题思路：
 * 1. 循环一遍链表，将每个节点保存到数组中。
 * 2. 第 n-1 个节点指向第 n+1 个节点。
 * 3. 注意 n 与 path 的 length，存在特判的情况。
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const path = [];

  dfs(head);
  function dfs(node) {
    if (node === null) return;
    path.push(node);
    dfs(node.next); // 递归
  }

  if (path.length === n && n > 1) return path[1]; // 头部特判
  if (path.length === n && n === 1) return null; // 头部特判
  if (n === 1) {
    path[path.length - n - 1].next = null;
  } else {
    path[path.length - n - 1].next = path[path.length - n + 1];
  }

  return path[0];
};
