/**
 * 54. 二叉搜索树的第k大节点
 *
 *
 *
 * 解题思路：
 * 中序遍历
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  const path = [];

  dfs(root);
  function dfs(node) {
    if (node === null) return;
    dfs(node.left);
    path.push(node.val);
    dfs(node.right);
  }

  return path[path.length - k];
};
