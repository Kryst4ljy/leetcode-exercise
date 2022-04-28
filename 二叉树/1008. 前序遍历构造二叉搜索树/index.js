/**
 * 1008. 前序遍历构造二叉搜索树
 * 给定一个整数数组，它表示BST(即 二叉搜索树 )的 先序遍历 ，构造树并返回其根。
 *
 *
 *
 * 解题思路：
 * 遍历每个值，进行递归，小于当前节点则递归左节点，大于当前节点则递归右节点
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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  let head = new TreeNode(preorder[0]); // 头节点构造

  for (let i = 1; i < preorder.length; i++) {
    dfs(head, preorder[i]);
  }

  function dfs(node, val) {
    if (node === null) {
      let n = new TreeNode(val);
      return n;
    }
    if (node.val > val) {
      let cur = dfs(node.left, val);
      cur !== undefined && (node.left = cur);
    } else {
      let cur = dfs(node.right, val);
      cur !== undefined && (node.right = cur);
    }
  }

  return head;
};
