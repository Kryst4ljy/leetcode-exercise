/**
 * 144. 二叉树的前序遍历
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历
 *
 *
 * 解题思路：
 * 递归
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
var preorderTraversal = function (root) {
  const path = [];

  dfs(root);
  function dfs(node) {
    if (node === null) return;
    path.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  return path;
};
