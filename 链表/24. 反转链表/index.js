/**
 * 24. 反转链表
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 *
 *
 * 示例1：
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 */

const { LList, LNode } = require("k-datastructures");

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let lastNode = null; // 上一个节点
  let currentNode = head; // 当前节点

  while (currentNode !== null) {
    // 保存下个节点
    const nextNode = currentNode.next;
    currentNode.next = lastNode;
    lastNode = currentNode;
    currentNode = nextNode;
  }

  return lastNode;
};

console.log(reverseList());
