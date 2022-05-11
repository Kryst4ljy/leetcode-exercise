/**
 * 449. 序列化和反序列化二叉搜索树
 * 序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。
 *
 * 设计一个算法来序列化和反序列化 二叉搜索树 。 对序列化/反序列化算法的工作方式没有限制。 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。
 *
 * 编码的字符串应尽可能紧凑。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/serialize-and-deserialize-bst
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = "";

  // 先序遍历
  dfs(root);
  function dfs(node) {
    if (node === null) return;
    res += node.val + ",";
    dfs(node.left);
    dfs(node.right);
  }

  return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "") return null;
  let source = data.split(",");
  let root = new TreeNode(Number(source[0]));

  // 插入节点
  function insert(node, val) {
    if (val > node.val && node.right === null) {
      node.right = new TreeNode(val);
      return;
    } else if (val > node.val && node.right !== null) {
      insert(node.right, val);
      return;
    }
    if (val < node.val && node.left === null) {
      node.left = new TreeNode(val);
      return;
    } else if (val < node.val && node.left !== null) {
      insert(node.left, val);
      return;
    }
  }

  for (let i = 1; i < source.length - 1; i++) {
    insert(root, Number(source[i]));
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
