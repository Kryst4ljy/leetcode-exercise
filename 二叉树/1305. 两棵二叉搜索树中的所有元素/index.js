/**
 * 1305. 两棵二叉搜索树中的所有元素
 * 给你 root1 和 root2 这两棵二叉搜索树。请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。
 *
 *
 *
 * 解题思路：
 * 1. 中序遍历：二叉搜索树 -> 排序数组
 * 2. 合并两个排序数组
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  // 1. 中序遍历：二叉搜索树 -> 排序数组
  let arr1 = [];
  let arr2 = [];

  dfs(root1, arr1);
  dfs(root2, arr2);
  function dfs(node, path) {
    if (node === null) return;
    dfs(node.left, path);
    path.push(node.val);
    dfs(node.right, path);
  }

  // 2. 合并两个排序数组
  let res = [];
  let key1 = 0;
  let key2 = 0;
  let len1 = arr1.length - 1;
  let len2 = arr2.length - 1;
  let len = len1 + len2;

  for (let i = 0; i <= len + 1; i++) {
    if (key1 > len1) {
      res[i] = arr2[key2++];
      continue;
    }
    if (key2 > len2) {
      res[i] = arr1[key1++];
      continue;
    }
    if (arr1[key1] >= arr2[key2]) {
      res[i] = arr2[key2++];
    } else {
      res[i] = arr1[key1++];
    }
  }

  return res;
};
