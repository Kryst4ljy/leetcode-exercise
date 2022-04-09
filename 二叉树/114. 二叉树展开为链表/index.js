/**
 * 114. 二叉树展开为链表
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 *
 * 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 * 展开后的单链表应该与二叉树 先序遍历 顺序相同。
 *
 *
 * 解题思路：
 * 1. 先序遍历二叉树，断开每个节点的指针，保存到 path 中。
 * 2. 遍历 path，连接链表。
 * 3. 返回 path[0]。
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const path = [];

  dfs(root);
  function dfs(node) {
    if (node === null) return;
    let l = node.left;
    let r = node.right;
    node.left = null;
    node.right = null;
    path.push(node);
    dfs(l);
    dfs(r);
  }

  for (let i = 0; i < path.length - 1; i++) {
    path[i].right = path[i + 1];
  }

  return path[0];
};
