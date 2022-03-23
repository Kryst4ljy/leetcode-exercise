/**
 * 142. 环形链表 II
 * 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 * 不允许修改 链表。
 *
 *
 * 解题思路：
 * map 缓存每个遍历到的节点，当遇到重复 key 时，跳出遍历，返回结果。
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let res = null;
  const map = new Map();

  dfs(head);
  function dfs(node) {
    if (node === null) return;
    if (map.has(node)) {
      res = node;
      return;
    }
    map.set(node, 1);
    dfs(node.next);
  }

  return res;
};
