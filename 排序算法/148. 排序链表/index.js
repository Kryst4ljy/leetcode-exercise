/**
 * 148. 排序链表
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 *
 *
 * 解题思路：
 * 1. 遍历一次链表，取出所有值放入一个数组
 * 2. 快排
 * 3. 再次遍历链表，放入排完序的数组
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
  const arr = [];
  let current = head;

  // 1. 取出链表中的所有数
  while (current !== null) {
    const next = current.next;
    arr.push(current.val);
    current = next;
  }

  // 2. 快排排序
  sort(arr, 0, arr.length - 1);

  // 3. 重新插入值
  current = head;
  let index = 0;
  while (current !== null) {
    let next = current.next;
    current.val = arr[index];
    index++;
    current = next;
  }

  return head;

  //  快排
  function sort(arr, left, right) {
    if (left >= right) return;
    let key = arr[left];
    let l = left;
    let r = right;

    while (l < r) {
      while (l < r && arr[r] >= key) {
        r--;
      }
      arr[l] = arr[r];
      while (l < r && arr[l] <= key) {
        l++;
      }
      arr[r] = arr[l];
    }

    arr[l] = key;
    sort(arr, left, l);
    sort(arr, l + 1, right);
  }
};
