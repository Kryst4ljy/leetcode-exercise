/**
 * 剑指 Offer 06. 从尾到头打印链表
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）
 *
 *
 *
 * 解题思路：遍历链表 + 逆序存储
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let res = [];

  dfs(head);
  function dfs(node) {
    if (node === null) return;
    res.unshift(node.val);
    dfs(node.next);
  }

  return res;
};
