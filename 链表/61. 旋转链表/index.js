/**
 * 61. 旋转链表
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 *
 *
 * 解题思路：
 * 1. 遍历链表，存储节点到一个数组中
 * 2. k % path.length 为移动几步，得到头节点下标
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head === null || k === 0) return head;
  const path = [];

  // 1. 切割链表
  dfs(head);
  function dfs(node) {
    if (node === null) return;
    let next = node.next;
    node.next = null;
    path.push(node);
    dfs(next);
  }

  if (path.length === 1) return head;

  // 2. 找到头节点，连接链表
  let step = k % path.length; // 移动几步
  let index = step === 0 ? 0 : path.length - step; // 头节点下标
  let key = index;
  let f = true; // 第二次循环到头节点

  while (key !== index || f) {
    if (index === 0 && key === path.length - 1) break;
    if (key === index - 1) break;
    f = false;
    if (key < path.length - 1) {
      path[key].next = path[key + 1];
      key++;
    } else {
      path[key].next = path[0];
      key = 0;
    }
  }

  return path[index];
};
