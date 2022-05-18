/**
 * 剑指 Offer II 077. 链表排序
 * 结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 
 * 
 * 解题思路：
 * 1. 链表 -> 数组
 * 2. 归并排序
 * 3. 连接链表
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
var sortList = function (head) {
  if (head === null) return null;
  // 1. 链表 -> 数组
  let arr = [];

  dfs(head);
  function dfs(node) {
    if (node === null) return;
    let next = node.next;
    node.next = null;
    arr.push(node);
    dfs(next);
  }

  // 2. 归并排序
  divide(arr, 0, arr.length - 1);
  function divide(arr, left, right) {
    if (left >= right) return;
    let mid = Math.floor((right - left + 1) / 2) + left;
    divide(arr, left, mid - 1);
    divide(arr, mid, right);
    cure(arr, left, mid, right);
  }
  function cure(arr, left, mid, right) {
    let res = [];
    let key1 = left;
    let key2 = mid;

    for (let i = 0; i < right - left + 1; i++) {
      if (key1 >= mid) {
        res[i] = arr[key2++];
        continue;
      }
      if (key2 > right) {
        res[i] = arr[key1++];
        continue;
      }
      if (arr[key1].val >= arr[key2].val) {
        res[i] = arr[key2++];
      } else {
        res[i] = arr[key1++];
      }
    }

    for (let i = 0; i < res.length; i++) {
      arr[i + left] = res[i];
    }
  }

  // 3. 连接链表
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1];
  }

  return arr[0];
};
