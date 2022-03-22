/**
 * 124. 二叉树中的最大路径和
 * 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
 * 路径和 是路径中各节点值的总和。
 * 给你一个二叉树的根节点 root ，返回其 最大路径和 。
 *
 *
 * 解题思路：
 * 1. 把整个二叉树分解为最小的子树 - 自身节点 + 左叶子节点 + 右叶子节点
 * 2. 此二叉树的最大值：Math.max(自身, 左+自身, 右+自身, 左+右+自身)。这个最大值拿去更新 res。
 * 3. 此二叉树能向上传递的路径节点：自身、左+自身、右+自身。 因为 左+右+自身 构不成一个路径向上传递，所以忽略。
 * 4. 以此类推，后序遍历整个树，得到最大值。
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
 * @return {number}
 */
var maxPathSum = function (root) {
  let res = undefined;

  dfs(root);
  function dfs(node) {
    if (node === null) return 0;
    let l = dfs(node.left);
    let r = dfs(node.right);
    // 1. 左上
    let left = l + node.val;
    // 2. 右上
    let right = r + node.val;
    // 3. 左上右
    let all = l + r + node.val;
    // 4. 左上、右上、自身对比 - 取最大值 - 此值用于向上传递
    let max = Math.max(left, right, node.val);
    // 5. 比较最大值
    res === undefined
      ? (res = Math.max(max, all))
      : (res = Math.max(res, max, all));
    return max;
  }

  return res;
};
