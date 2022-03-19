/**
 * 236. 二叉树的最近公共祖先
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 *
 *
 * 解题思路：
 * 1. 先序遍历+回溯两次树，得到目标节点的路径值。比如按照示例图的，得到 [3,5] 与 [3,1] || [3,5] 与 [3,5,2,4]
 * 2. 然后首节点依次相消，得到最近的相等的节点就是最近父节点 [3] || [5]。
 * 3. 再次遍历树，获取到最近父节点返回。
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let res = [];
  let path = [];

  dfs(root, p);
  path = [];
  dfs(root, q);
  function dfs(node, end) {
    if (node === null) return;
    path.push(node.val);
    if (node.val === end.val) {
      res.push([...path]);
      return;
    }
    dfs(node.left, end);
    dfs(node.right, end);
    path.pop(node.val);
  }

  let arr1 = res[0];
  let arr2 = res[1];
  let current = 0;

  while (true) {
    if (arr1[current] === arr2[current]) {
      current++;
    } else {
      current--;
      break;
    }
  }

  let resNode = null;
  dfsToNode(root, arr1[current]);
  function dfsToNode(node, end) {
    if (node === null || resNode !== null) return;
    if (node.val === end) {
      resNode = node;
    }
    dfsToNode(node.left, end);
    dfsToNode(node.right, end);
  }

  return resNode;
};
