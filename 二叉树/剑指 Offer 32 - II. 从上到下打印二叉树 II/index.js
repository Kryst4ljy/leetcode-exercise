/**
 * 剑指 Offer 32 - II. 从上到下打印二叉树 II
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
 *
 *
 *
 * 解题思路：简单的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];

  bfs(root, 0);
  function bfs(node, deep) {
    if (node === null) return;
    if (res[deep] === undefined) {
      res[deep] = [node.val];
    } else {
      res[deep].push(node.val);
    }
    bfs(node.left, deep + 1);
    bfs(node.right, deep + 1);
  }

  return res;
};
