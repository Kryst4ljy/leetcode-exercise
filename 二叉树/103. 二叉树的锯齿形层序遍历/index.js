/**
 * 103. 二叉树的锯齿形层序遍历
 * 给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 *
 *
 * 解题思路：
 * 广度优先遍历，i 为偶数时从左往右存，i 为奇数时从右往左存
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const res = [];

  bfs(root, 0);
  function bfs(node, i) {
    if (node === null) return;
    if (i % 2 === 0) {
      // 从左往右
      res[i] === undefined ? (res[i] = [node.val]) : res[i].push(node.val);
    } else {
      // 从右往左
      res[i] === undefined ? (res[i] = [node.val]) : res[i].unshift(node.val);
    }
    bfs(node.left, i + 1);
    bfs(node.right, i + 1);
  }

  return res;
};
