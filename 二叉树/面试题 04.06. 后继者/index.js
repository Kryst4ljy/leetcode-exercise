/**
 * 面试题 04.06. 后继者
 * 设计一个算法，找出二叉搜索树中指定节点的“下一个”节点（也即中序后继）。
 *
 * 如果指定节点没有对应的“下一个”节点，则返回null。
 *
 *
 *
 * 解题思路：
 * 1. 中序遍历二叉树，获得一个 path。
 * 2. 遍历 path，比较节点，返回下一个节点。
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
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  let path = [];

  dfs(root);
  function dfs(node) {
    if (node === null) return;
    dfs(node.left);
    path.push(node);
    dfs(node.right);
  }

  for (let i = 0; i < path.length; i++) {
    if (path[i] == p) {
      return path[i + 1] === undefined ? null : path[i + 1];
    }
  }
};
