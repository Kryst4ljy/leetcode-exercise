/**
 * 958. 二叉树的完全性检验
 * 给定一个二叉树的 root ，确定它是否是一个 完全二叉树 。
 *
 * 在一个 完全二叉树 中，除了最后一个关卡外，所有关卡都是完全被填满的，并且最后一个关卡中的所有节点都是尽可能靠左的。它可以包含 1 到 2h 节点之间的最后一级 h 。
 *
 *
 *
 * 解题思路：
 * 层序遍历 bfs
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
var isCompleteTree = function (root) {
  let res = true;
  const path = [];

  bfs(root, 0);
  function bfs(node, index) {
    if (!res) return;
    let val = node === null ? 2 : 1;
    if (val === 1 && path[index] !== undefined && path[index].includes(2)) {
      res = false;
      return;
    }
    path[index] === undefined ? (path[index] = [val]) : path[index].push(val);
    if (node === null) return;
    bfs(node.left, index + 1);
    bfs(node.right, index + 1);
  }

  if (res) {
    for (let i = 0; i < path.length - 2; i++) {
      for (let j = 0; j < path[i].length; j++) {
        if (path[i][j] === 2) {
          return false;
        }
      }
    }
  }

  return res;
};
