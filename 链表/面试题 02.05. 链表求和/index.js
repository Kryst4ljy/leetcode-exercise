/**
 * 面试题 02.05. 链表求和
 * 给定两个用链表表示的整数，每个节点包含一个数位。
 *
 * 这些数位是反向存放的，也就是个位排在链表首部。
 *
 * 编写函数对这两个整数求和，并用链表形式返回结果。
 *
 * 进阶：思考一下，假设这些数位是正向存放的，又该如何解决呢?
 *
 *
 * 解题思路：
 * 1. 遍历节点，计算当前节点和，传递到下一次递归此次的进位
 * 2. 输出节点
 * 
 * 进阶：如果是正向存放的，可以先提取出两个节点的值，最后进行相加操作。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = null;
  let current = null;

  dfs(l1, l2, 0);
  function dfs(node1, node2, num) {
    if (node1 === null && node2 === null && num === 0) return;
    let l = node1 === null ? 0 : node1.val;
    let r = node2 === null ? 0 : node2.val;
    let sum = l + r + num;

    let node = new ListNode(sum % 10);
    head === null && (head = node);
    current !== null && (current.next = node);
    current = node;

    dfs(
      node1 === null ? null : node1.next,
      node2 === null ? null : node2.next,
      Math.floor(sum / 10)
    );
  }

  return head;
};
