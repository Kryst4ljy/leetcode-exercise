/**
 * 105. 从前序与中序遍历序列构造二叉树
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 *
 *
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const tree = new TreeNode(preorder[0], null, null);

  dfs(preorder, inorder, tree);
  function dfs(arr1, arr2, tree) {
    let num = arr1[0]; // 顶部根节点
    let index = arr2.findIndex((val) => val === num); // 根节点当前位置，用于判断根节点是否存在左右节点
    console.log(arr1, num, index, tree);
    // 无左子树无右子树
    if (arr1.length === 1) return;
    // 只有左子树
    if (arr1.length > 1 && index === arr1.length - 1) {
      let l1 = arr1.slice(1, index + 1);
      let l2 = arr2.slice(0, index);
      tree.left = new TreeNode(l1[0], null, null);
      dfs(l1, l2, tree.left);
      return;
    }
    // 只有右子树
    if (arr1.length > 1 && index === 0) {
      let r1 = arr1.slice(index + 1);
      let r2 = arr2.slice(index + 1);
      tree.right = new TreeNode(r1[0], null, null);
      dfs(r1, r2, tree.right);
      return;
    }
    // 既有左子树又有右子树
    if (index > 0 && index < arr2.length - 1) {
      let l1 = arr1.slice(1, index + 1);
      let l2 = arr2.slice(0, index);
      let r1 = arr1.slice(index + 1);
      let r2 = arr2.slice(index + 1);
      console.log(index, l1, l2, r1, r2);
      tree.left = new TreeNode(l1[0], null, null);
      tree.right = new TreeNode(r1[0], null, null);
      dfs(l1, l2, tree.left);
      dfs(r1, r2, tree.right);
      return;
    }
  }

  return tree;
};
