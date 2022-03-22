/**
 * 143. 重排链表
 * 给定一个单链表 L 的头节点 head ，单链表 L 表示为：
 * L0 → L1 → … → Ln - 1 → Ln
 * 请将其重新排列后变为：
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 *
 * 解题思路：
 * 将链表节点断开，存放至一个数组中，利用双指针进行重新链接。
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  const arr = [];

  dfs(head);
  function dfs(node) {
    if (node === null) return;
    let next = node.next;
    node.next = null;
    arr.push(node);
    dfs(next);
  }

  let l = 0;
  let r = arr.length - 1;
  let current = null;
  let f = "left";
  while (l < r) {
    if (f === "left") {
      current = arr[l];
      current.next = arr[r];
      f = "right";
      l++;
    } else {
      current = arr[r];
      current.next = arr[l];
      f = "left";
      r--;
    }
  }

  return head;
};
