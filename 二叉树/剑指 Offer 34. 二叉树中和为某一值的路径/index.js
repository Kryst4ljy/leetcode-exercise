/**
 * 剑指 Offer 34. 二叉树中和为某一值的路径
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 *
 * 叶子节点 是指没有子节点的节点。
 *
 *
 *
 * 解题思路：
 * 1. 先序遍历，记录每个节点的和值
 * 2. 回溯
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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  const res = [];
  const path = [];
  let sum = 0;

  dfs(root);
  function dfs(node) {
    if (node === null) return;
    path.push(node.val);
    sum += node.val;
    if (
      node !== null &&
      node.left === null &&
      node.right === null &&
      sum === target
    ) {
      res.push([...path]);
    }
    dfs(node.left);
    dfs(node.right);
    sum -= node.val;
    path.pop();
  }

  return res;
};
