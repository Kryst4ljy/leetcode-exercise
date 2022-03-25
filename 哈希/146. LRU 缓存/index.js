/**
 * 146. LRU 缓存
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
 * 实现 LRUCache 类：
 * LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 *
 *
 *
 * 解题思路：
 * 设置一个 map，因为 map 的存储是有先后关系的。
 * put：先判断是否存在这个数，存在则删除这个数，再添加 - 因为不改变长度。
 *      不存在则要先判断大小，还有剩余空间则直接添加，没有则先删除第一个数。
 * get：判断是否存在这个数，存在则先缓存次数的 value，再删除 + 添加一次
 *      不存在则直接返回 -1。
 */

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.max = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 判断有无此数
  if (this.map.has(key)) {
    this.map.delete(key);
    this.map.set(key, value);
  } else {
    // 没有这个数，就得判断大小
    if (this.map.size < this.max) {
      this.map.set(key, value);
    } else {
      // 删除第一个节点
      this.map.delete(this.map.keys().next().value);
      this.map.set(key, value);
    }
  }
  return null;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
