/**
 * 112. 路径总和
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
 * 叶子节点 是指没有子节点的节点。
 *
 *
 * 解题思路：
 * 先序遍历 + 回溯，到根节点后相加判断
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let res = false;
  const path = [];

  dfs(root);
  function dfs(node) {
    if (node === null || res) return;
    path.push(node.val);
    if (node.left === null && node.right === null) {
      let num = 0;
      for (let i = 0; i < path.length; i++) {
        num += path[i];
      }
      if (num === targetSum) {
        res = true;
        return;
      }
    }

    dfs(node.left);
    dfs(node.right);
    path.pop();
  }

  return res;
};
