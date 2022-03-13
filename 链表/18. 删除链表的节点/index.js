/**
 * 18. 删除链表的节点
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
 * 返回删除后的链表的头节点。
 *
 *
 * 解题思路：
 * 遍历链表每个节点，如果下个节点是 val，则保存 下个节点的下个节点，当前节点链接到下个节点的下个节点。
 * 注意要判断首节点。
 *
 * 示例：
 * 输入: head = [4,5,1,9], val = 5
 * 输出: [4,1,9]
 * 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
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
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head.val === val) return head.next;

  dfs(head);
  function dfs(node) {
    if (node === null) return;
    const next = node.next; // 下一个节点
    if (next.val === val) {
      const link = next.next; // 下下个节点
      node.next = link;
      return;
    }
    dfs(node.next);
  }

  return head;
};
