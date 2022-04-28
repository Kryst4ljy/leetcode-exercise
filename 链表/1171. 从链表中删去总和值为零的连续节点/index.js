/**
 * 1171. 从链表中删去总和值为零的连续节点
 * 给你一个链表的头节点 head，请你编写代码，反复删去链表中由 总和 值为 0 的连续节点组成的序列，直到不存在这样的序列为止。
 *
 * 删除完毕后，请你返回最终结果链表的头节点。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 *
 *
 * 解题思路：
 * 1. 利用一个数组存储上次结果 + 这次的结果，得到一个所有的条件的结果数组。
 * 2. 当遍历到当前节点时，判断是否存在 -(当前节点值)，存在则删除掉之前的节点。
 * 3. 当前节点值为 0 时，直接跳过。
 * 4. 组合节点。
 *
 *
 * 示例：
 * 输入：head = [1,2,-3,3,1]
 * 输出：[3,1]
 * 提示：答案 [1,2,1] 也是正确的。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
  let path = [];

  dfs(head);
  function dfs(node) {
    if (node === null) return;

    let next = node.next;
    node.next = null;

    if (node.val !== 0) {
      if (path.length > 0) {
        // 获取上一个节点的值，判断是否要消除
        let last = path[path.length - 1]["val"];
        let index = last.indexOf(-node.val);
        if (index === -1) {
          // 不需要裁剪
          let val = [];
          for (let i = 0; i < last.length; i++) {
            val[i] = last[i] + node.val;
          }
          path.push({ node: node, val: [node.val, ...val] });
        } else {
          // 裁剪
          path.splice(path.length - index - 1, index + 1);
        }
      } else {
        path.push({ node: node, val: [node.val] });
      }
    }

    dfs(next);
  }

  // 组合节点
  for (let i = 0; i < path.length - 1; i++) {
    path[i].node.next = path[i + 1].node;
  }

  return path.length === 0 ? null : path[0]["node"];
};
