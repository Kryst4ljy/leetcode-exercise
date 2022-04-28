/**
 * 剑指 Offer 35. 复杂链表的复制
 *
 *
 * 解题思路：
 * 把链表每个节点存入一个数组，并且新增一个 index 值记录下标。这样链表就成了一个有序的数组了。
 * 记录 random 的时候，指向哪个节点，就去获取那个节点的 index，这样就能查询到是哪个节点了。
 * 1. next 比较好链接
 * 2. random 的话，先遍历一遍链表，每个链表记录当前 index 值，再把节点存储到一个 数组中。
 * 3. 然后再遍历数组，节点的 random 指向 传入链表节点的 index 值。
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let path = [];
  let copy = [];

  dfs(head, 0);
  function dfs(node, deep) {
    if (node === null) return;
    let cur = new Node(node.val);
    node.index = deep;
    cur.index = deep;
    path.push(node);
    copy.push(cur);
    dfs(node.next, deep + 1);
  }

  for (let i = 0; i < path.length; i++) {
    copy[i].next = i === path.length - 1 ? null : copy[i + 1];
    copy[i].random =
      path[i].random === null ? null : copy[path[i].random.index];
  }

  return copy[0];
};
