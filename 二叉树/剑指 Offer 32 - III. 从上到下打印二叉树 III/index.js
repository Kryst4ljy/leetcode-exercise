/**
 * 剑指 Offer 32 - III. 从上到下打印二叉树 III
 * 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
 *
 *
 * 解题思路：广度优先遍历，判断当前层级是奇偶
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];

  bfs(root, 0);
  function bfs(node, deep) {
    if (node === null) return;
    if (deep % 2 === 0) {
      if (res[deep] === undefined) {
        res[deep] = [node.val];
      } else {
        res[deep].push(node.val);
      }
    } else {
      if (res[deep] === undefined) {
        res[deep] = [node.val];
      } else {
        res[deep].unshift(node.val);
      }
    }
    bfs(node.left, deep + 1);
    bfs(node.right, deep + 1);
  }

  return res;
};
