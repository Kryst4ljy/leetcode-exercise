/**
 * 138. 复制带随机指针的链表
 * 描述见图
 *
 *
 *
 * 解题思路：
 * 先复制一个链表。
 * 再传入 原链表，新链表，以及每一个 random 节点，当遍历到 原链表节点 与 当前 random 节点匹配时，返回新链表的节点。
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
  const root = dfs(head);

  //  正常复制链表
  function dfs(root) {
    if (root === null) return null;
    const node = new Node(root.val, null, null);
    node.next = dfs(root.next);
    return node;
  }

  // 复制 random
  dfsRandom(head, root);
  function dfsRandom(node1, node2) {
    if (node1 === null) return;
    node2.random =
      node1.random === null ? null : searchNode(root, head, node1.random);
    dfsRandom(node1.next, node2.next);
  }

  // 搜索节点
  function searchNode(node1, node2, target) {
    if (node2 === null) return null;
    if (node2 === target) return node1;
    return searchNode(node1.next, node2.next, target);
  }

  return root;
};
