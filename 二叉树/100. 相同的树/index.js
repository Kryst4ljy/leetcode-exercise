/**
 * 100. 相同的树
 *
 *  给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
 *
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 *
 *
 *
 * 解题思路：递归遍历节点，判断两个节点值是否相等。
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let res = true;

  dfs(p, q);
  function dfs(node1, node2) {
    if (!res) return;
    if (node1 === null && node2 === null) return;
    if (node1 === null && node2 !== null) return (res = false);
    if (node1 !== null && node2 === null) return (res = false);

    if (node1.val !== node2.val) return (res = false);
    dfs(node1.left, node2.left);
    dfs(node1.right, node2.right);
  }

  return res;
};
