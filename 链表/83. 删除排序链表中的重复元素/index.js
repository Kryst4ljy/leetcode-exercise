/**
 * 83. 删除排序链表中的重复元素
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 *
 *
 * 解题思路：
 * 遍历链表，记录不重复的节点入 path。
 * 循环 path，链接节点。
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
  if (head === null) return head;
  const path = [];
  let current = undefined;

  dfs(head);
  function dfs(node) {
    if (node === null) return;
    const next = node.next;
    node.next = null;
    if (node.val !== current) {
      current = node.val;
      path.push(node);
    }
    dfs(next);
  }

  for (let i = 0; i < path.length - 1; i++) {
    path[i].next = path[i + 1];
  }

  return path[0];
};
