/**
 * 543. 二叉树的直径
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 *
 *
 * 解题思路：
 * 划分一颗二叉树 为 最小节点。
 * 分为 向上传递 和 结算 两部分。
 *  向上传递：Math.max(l, r) + 1 自身。如果为根节点，传 0。
 *  结算：两个分支和 + 2 自身算两个边。 最重要的是如果为 根节点 即 node.left node.right 都为 null，则向上传递 -1，剪枝。
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
var diameterOfBinaryTree = function (root) {
  let res = 0;

  dfs(root);
  function dfs(node) {
    if (node === null) return -1;
    let l = dfs(node.left);
    let r = dfs(node.right);
    // 结算 - 两个分支的值 + 自身
    res = Math.max(res, l + r + 2);
    // 传递
    return l === -1 && r === -1 ? 0 : Math.max(l, r) + 1; // 传递 - 最大的那个值 + 1（自身）
  }

  return res;
};
