/**
 * 24. 两两交换链表中的节点
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 *
 *
 * 解题思路：
 * 1. 维护一个数组，存储每 k 个链表的节点（首尾），因为此题只有 2 个反转，所以只存储反转节点即可。
 * 2. 遍历节点，获得反转完了的各个分链表
 * 3. 整合链表
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
var swapPairs = function (head) {
  if (head === null) return head; // 特判
  const path = [];
  let step = 1;

  dfs(null, head);
  function dfs(pre, cur) {
    if (cur === null) return;
    let next = cur.next;
    cur.next = pre;
    if (step === 2 || next === null) {
      path.push(cur);
      cur = null;
      step = 1;
      dfs(cur, next);
    } else {
      step++;
      dfs(cur, next);
    }
  }

  // 整合
  for (let i = 0; i < path.length - 1; i++) {
    path[i].next.next = path[i + 1];
  }

  return path[0];
};
