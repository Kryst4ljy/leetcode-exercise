/**
 * 101. 对称二叉树
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 *
 *
 * 解题思路：
 * 中序遍历，收尾相消，如果相同则为 true。
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const path = [];

  dfs(root, 0);
  function dfs(node, round) {
    if (node === null) return;
    dfs(node.left, round + 1);
    path.push(`${round}${node.val}`);
    dfs(node.right, round + 1);
  }

  console.log(path);

  return path.join() === path.reverse().join();
};
