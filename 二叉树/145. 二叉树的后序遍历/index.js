/**
 * 145. 二叉树的后序遍历
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const path = [];

  dfs(root);
  function dfs(node) {
    if (node === null) return;
    dfs(node.left);
    dfs(node.right);
    path.push(node.val);
  }

  return path;
};
