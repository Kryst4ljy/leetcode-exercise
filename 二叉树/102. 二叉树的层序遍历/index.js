/**
 * 102. 二叉树的层序遍历
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 *
 *
 * 解题思路：
 * dfs，传入当前节点的同时传入层级，每层依次存入 arr 结果中。
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
var levelOrder = function (root) {
  const arr = [];

  dfs(root, 0);
  function dfs(node, deep) {
    if (node === null) return;
    arr[deep] === undefined
      ? (arr[deep] = [node.val])
      : arr[deep].push(node.val);
    dfs(node.left, deep + 1);
    dfs(node.right, deep + 1);
  }

  return arr;
};
