/**
 * 21. 合并两个有序链表
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 *
 * 解题思路：
 * 链表插入，用循环。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  let head = null; // 链表头

  dfs(list1, list2);
  function dfs(l, r) {
    let next = null;
    let cur = null;
    if (l.val <= r.val) {
      next = l.next;
      if (next === null) {
        insert(l);
        insert(r);
        return;
      }
      cur = r;
      l.next = null;
      insert(l);
    } else {
      next = r.next;
      if (next === null) {
        insert(r);
        insert(l);
        return;
      }
      cur = l;
      r.next = null;
      insert(r);
    }

    dfs(next, cur);
  }

  // 链表插入方法
  function insert(node) {
    if (node === null) return;
    if (head === null) {
      head = node;
      return;
    }
    let current = head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  return head;
};
