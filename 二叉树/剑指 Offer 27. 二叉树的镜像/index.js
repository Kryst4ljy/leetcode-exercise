/**
 * 剑指 Offer 27. 二叉树的镜像
 * 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
 *
 *
 *
 * 解题思路：递归 + 左右互换
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
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  dfs(root);
  function dfs(node) {
    if (node === null) return;
    let l = node.left;
    node.left = node.right;
    node.right = l;
    dfs(node.left);
    dfs(node.right);
  }
  return root;
};
