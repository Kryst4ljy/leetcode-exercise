/**
 * 2. 两数相加
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 *
 *
 * 解题思路：
 * 同时遍历两个链表，两个的值的和取余为此节点的值，两个的值的和 / 10 向下取整为进一位的数，传递到下一轮。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let res = null;
  let current = null;

  dfs(l1, l2, 0);
  function dfs(node1, node2, sum) {
    if (node1 === null && node2 === null && sum === 0) return sum;
    let l = node1 === null ? 0 : node1.val;
    let r = node2 === null ? 0 : node2.val;
    sum += l + r;
    let cur = new ListNode(sum % 10, null);
    if (current !== null) {
      current.next = cur;
    } else {
      res = cur;
    }
    current = cur;

    return dfs(
      node1 === null ? null : node1.next,
      node2 === null ? null : node2.next,
      Math.floor(sum / 10)
    );
  }

  return res;
};
