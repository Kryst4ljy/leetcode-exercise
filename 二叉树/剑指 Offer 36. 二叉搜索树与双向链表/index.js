/**
 * 剑指 Offer 36. 二叉搜索树与双向链表
 *
 *
 *
 *
 * 解题思路：
 * 1. 二叉搜索树：中序遍历 拿到一个排序的节点数组
 * 2. 遍历数组，重新组合节点。
 */

/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  const path = [];

  // 1. 搜索二叉树-中序遍历：获得一个排序的节点数组
  dfs(root);
  function dfs(node) {
    if (node === null) return;
    dfs(node.left);
    path.push(node);
    dfs(node.right);
  }

  // 2. 重新组合节点
  for (let i = 0; i < path.length; i++) {
    // 后继指针
    if (i === 0) {
      path[i].left = path[path.length - 1];
    } else {
      path[i].left = path[i - 1];
    }
    // 前驱指针
    if (i === path.length - 1) {
      path[i].right = path[0];
    } else {
      path[i].right = path[i + 1];
    }
  }

  return path[0];
};
