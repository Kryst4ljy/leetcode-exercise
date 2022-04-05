/**
 * 328. 奇偶链表
 * 给定单链表的头节点 head ，将所有索引为奇数的节点和索引为偶数的节点分别组合在一起，然后返回重新排序的列表。
 *
 * 第一个节点的索引被认为是 奇数 ， 第二个节点的索引为 偶数 ，以此类推。
 *
 * 请注意，偶数组和奇数组内部的相对顺序应该与输入时保持一致。
 *
 * 你必须在 O(1) 的额外空间复杂度和 O(n) 的时间复杂度下解决这个问题。
 *
 *
 *
 * 解题思路：
 * O(n) 的时间复杂度，代表了只有一层循环。
 * O(1) 的空间复杂度，代表了不在循环中额外申明变量。
 * 1. 先遍历一次链表，提取出所有的 奇数 偶数 节点到一个栈中维护。
 * 2. 拼接两个链表栈。
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
var oddEvenList = function (head) {
  if (head === null) return head;
  const stack1 = [];
  const stack2 = [];
  let index = 1;

  dfs(head);
  function dfs(node) {
    if (node === null) return;
    // 判断奇偶
    let next = node.next;
    node.next = null;
    index % 2 === 0 ? stack2.push(node) : stack1.push(node);
    index++;
    dfs(next);
  }

  // 连接
  for (let i = 0; i < stack1.length - 1; i++) {
    stack1[i].next = stack1[i + 1];
  }
  for (let i = 0; i < stack2.length - 1; i++) {
    stack2[i].next = stack2[i + 1];
  }
  stack1[stack1.length - 1].next = stack2[0] === undefined ? null : stack2[0];

  return stack1[0];
};
