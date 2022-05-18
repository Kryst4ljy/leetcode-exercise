/**
 * 107. 二叉树的层序遍历 II
 * 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 *
 *
 * 解题思路：
 * 1. 正常 bfs
 * 2. 反转数组
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  // 1. 正常 bfs
  let res = [];

  bfs(root, 0);
  function bfs(node, deep) {
    if (node === null) return;
    if (res[deep] === undefined) {
      res[deep] = [node.val];
    } else {
      res[deep].push(node.val);
    }
    bfs(node.left, ++deep);
    bfs(node.right, deep);
  }

  return res.reverse();
};
