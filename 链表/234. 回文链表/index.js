/**
 * 234. 回文链表
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 * 
 * 
 * 解题思路：
 * 遍历链表，记录在数组上，中分看两边。
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const path = [];

  dfs(head);
  function dfs(node) {
    if (node === null) return;
    path.push(node.val);
    dfs(node.next);
  }

  return path.join("") === path.reverse().join("");
};
