/**
 * 110. 平衡二叉树
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 本题中，一棵高度平衡二叉树定义为：
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1
 *
 *
 * 解题思路：
 * 每个最小子结构，向上传递 + 结算
 * 1. 如果没有左右子节点，则为 0+0+1，向上传递 1
 * 2. 如果左右子节点存在任意一个，则为 Math.max(l,r)+1，向上传递大的层级
 * 3. 每层进行结算，如果遇到高度差超过 1 的子结构，则跳出递归，返回结果
 * 
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
var isBalanced = function (root) {
  let res = true;

  dfs(root);
  function dfs(node) {
    if (node === null || !res) return 0;
    let l = dfs(node.left);
    let r = dfs(node.right);

    // 结算
    if (Math.abs(l - r) > 1) {
      res = false;
      return;
    }
    // 向上提交
    return Math.max(l, r) + 1;
  }

  return res;
};
