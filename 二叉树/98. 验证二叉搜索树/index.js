/**
 * 98. 验证二叉搜索树
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 *
 * 有效 二叉搜索树定义如下：
 *
 *  节点的左子树只包含 小于 当前节点的数。
 *  节点的右子树只包含 大于 当前节点的数。
 *  所有左子树和右子树自身必须也是二叉搜索树。
 *
 *
 * 解题思路：
 * 中序遍历能拿到一个从小到大的节点路径，以此来判断。
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
var isValidBST = function (root) {
  const path = [];
  let res = true;

  dfs(root);
  function dfs(node) {
    if (node === null || !res) return;
    dfs(node.left);
    if (path.length === 0) {
      path.push(node.val);
    } else {
      if (path[path.length - 1] < node.val) {
        path.push(node.val);
      } else {
        res = false;
        return;
      }
    }
    dfs(node.right);
  }

  return res;
};
