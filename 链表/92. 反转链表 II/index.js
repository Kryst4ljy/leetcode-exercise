/**
 * 92. 反转链表 II
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 *
 *
 * 解题思路：
 * 1-2-3-4-5，l = 2，r = 4；
 *
 * 1. 递归遍历当前链表，记录 pre = 1 节点。当指针到了 left 时， 记录当前的节点为 next = 2。
 * 2. 从 left 节点到 right 节点开始反转链表。---> 1 4-3-2 5
 * 3. 结束反转后，pre 链接到 current 节点。 ---> 1-4-3-2 5
 * 4. next 链接到 current + 1 ---> 1-4-3-2-5
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let res = null;
  let cur = 1; // 当前节点
  let preNode = null; // 存储之前的节点
  let nextNode = null; // 存储之后的节点

  dfs(null, head);

  function dfs(last, node) {
    if (node === null) return;
    if (cur === left) {
      nextNode = node;
      preNode = last;
      // 反转链表
      dfsReverse(null, node, cur);
      return;
    }
    cur++; // 计数
    dfs(node, node.next);
  }

  function dfsReverse(last, node, cur) {
    if (node === null) return;
    const next = node.next;
    node.next = last;

    if (cur === right) {
      nextNode.next = next;
      if (preNode !== null) {
        preNode.next = node;
        res = head;
      } else {
        res = node;
      }
      return;
    }

    cur++;
    dfsReverse(node, next, cur);
  }

  return res;
};
