/**
 * 25. K 个一组翻转链表
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 进阶：
 * 你可以设计一个只使用常数额外空间的算法来解决此问题吗？
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 *
 *
 * 解题思路：
 * 每次遇到第 k 个节点，将翻转完的链表存入 record 数组中，得到一个反转的断裂的 k 次链表数组。
 * 比如 1-2-3-4-5-6-7，3
 * 得到 [3-2-1, 6-5-4, 7]
 *
 * 1.难点：如何头尾链接？
 * 解决：在第一次遍历链表的时候，存入的过程中记录 头 尾，
 *
 * 2.难点：最后一个链表如何保持原有顺序？
 * 解决：先取出，逆转后再插入
 *
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let current = head; // 当前节点
  let pre = null; // 上个节点
  let next = null; // 下个节点
  let record = []; // 反转节点数组 0 或者 k的倍数
  let index = 0; // 当前第几个节点
  let round = 0; // 当前第几组

  // 这里循环完后获得一个 逢 k 次反转的 长度为 k 的链表数组
  while (current !== null) {
    round = Math.floor(index / k);
    record[round] === undefined && (record[round] = {});

    // 0.记录节点 - 尾
    if (index === 0 || index % k === 0) {
      record[round]["end"] = current;
      // ！！！断开链表
      pre = null;
    }
    // 0.记录节点 - 头
    if (index % k === k - 1 || current.next === null) {
      record[round]["start"] = current;
    }
    // 1.保存下个节点
    next = current.next;
    // 2.链接上个节点
    current.next = pre;
    // 3.保存上个节点
    pre = current;
    // 4.指针后移
    current = next;
    // 5.计数
    index++;
  }

  // 反转末尾 - 最后一个链表长度是不是不够 k
  if (index % k !== 0) {
    let lastNode = record.splice(-1, 1);
    let current = lastNode[0]["start"]; // 当前节点
    let pre = null; // 上个节点
    let next = null; // 下个节点
    while (current !== null) {
      // 1.保存下个节点
      next = current.next;
      // 2.链接上个节点
      current.next = pre;
      // 3.保存上个节点
      pre = current;
      // 4.指针后移
      current = next;
    }
    record.push({ start: pre });
  }

  // 拼接链表
  for (let i = 0; i < record.length; i++) {
    if (record[i + 1] === undefined) break;
    record[i]["end"].next = record[i + 1]["start"];
  }

  return record[0]["start"];
};
