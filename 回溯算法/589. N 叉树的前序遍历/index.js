/**
 * 589. N 叉树的前序遍历
 * 给定一个 n 叉树的根节点  root ，返回 其节点值的 前序遍历 。
 * n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。
 * 
 * 
 * 解题思路：
 * 先序遍历，回溯走起
 */

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return [];
  let res = [];

  bfs(root);
  function bfs(node) {
    res.push(node.val);
    if (node.children.length === 0) return;

    for (let i = 0; i < node.children.length; i++) {
      bfs(node.children[i]);
    }
  }

  return res;
};
