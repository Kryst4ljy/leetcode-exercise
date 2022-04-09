/**
 * 104. 二叉树的最大深度
 * 给定一个二叉树，找出其最大深度。
 *
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 *
 * 
 * 解题思路：
 * 深度优先遍历 + 记录 deep
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
 * @return {number}
 */
var maxDepth = function (root) {
  function dfs(node, deep) {
    if (node === null) return deep;
    let l = dfs(node.left, deep + 1);
    let r = dfs(node.right, deep + 1);
    return Math.max(l, r);
  }

  return dfs(root, 0);
};
