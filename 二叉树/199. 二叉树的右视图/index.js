/**
 * 199. 二叉树的右视图
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 *
 *
 * 解题思路：
 * 广度优先遍历，存储最后一个值。
 * 广度优先写法：每层记录一个值，标记第几层，然后有一个 map 去存储每一层的节点。
 */

/**
 * @name bfs
 * @param {*} node 当前节点
 * @param {*} i 当前节点所在的层级
 */
const map = new Map();

function bfs(node, i) {
  if (node === null) return;
  map.has(i) ? map.get(i).push(node) : map.set(i, node);
  bfs(node.left, i + 1);
  bfs(node.right, i + 1);
}

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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const path = [];

  dfs(root, 0);
  function dfs(node, i) {
    if (node === null) return;
    path[i] = node.val;
    dfs(node.left, i + 1);
    dfs(node.right, i + 1);
  }

  return path;
};
