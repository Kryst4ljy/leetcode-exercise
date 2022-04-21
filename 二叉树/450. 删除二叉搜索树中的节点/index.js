/**
 * 450. 删除二叉搜索树中的节点
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
 *
 *
 *
 * 解题思路：
 * 1. 找到当前匹配到的节点。
 * 2. 当前节点左右子节点边界判断。
 * 3. 当前节点左节点递归赋值到右节点左根节点。
 * 4. 替换当前节点为右节点。
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  dfs(root, null, undefined);
  function dfs(node, top, turn) {
    if (node === null) return;
    if (node.val === key) {
      let r = node.right;
      let l = node.left;
      let newNode = null;

      // 0. 判断边界
      if (r === null && l === null) {
        newNode = null;
      } else if (r === null && l !== null) {
        newNode = l;
      } else if (r !== null && l === null) {
        newNode = r;
      } else {
        let current = r;
        while (true) {
          if (current.left === null) {
            current.left = l;
            break;
          }
          current = current.left;
        }
        newNode = r;
      }
      if (top === null) {
        root = newNode;
      } else {
        top[turn] = newNode;
      }
      return;
    }
    dfs(node.left, node, "left");
    dfs(node.right, node, "right");
  }

  return root;
};
