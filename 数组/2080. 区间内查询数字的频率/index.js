/**
 * 2080. 区间内查询数字的频率
 * 
 * 请你设计一个数据结构，它能求出给定子数组内一个给定值的 频率 。

子数组中一个值的 频率 指的是这个子数组中这个值的出现次数。

请你实现 RangeFreqQuery 类：

RangeFreqQuery(int[] arr) 用下标从 0 开始的整数数组 arr 构造一个类的实例。
int query(int left, int right, int value) 返回子数组 arr[left...right] 中 value 的 频率 。
一个 子数组 指的是数组中一段连续的元素。arr[left...right] 指的是 nums 中包含下标 left 和 right 在内 的中间一段连续元素。

 

示例 1：

输入：
["RangeFreqQuery", "query", "query"]
[[[12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]], [1, 2, 4], [0, 11, 33]]
输出：
[null, 1, 2]

解释：
RangeFreqQuery rangeFreqQuery = new RangeFreqQuery([12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]);
rangeFreqQuery.query(1, 2, 4); // 返回 1 。4 在子数组 [33, 4] 中出现 1 次。
rangeFreqQuery.query(0, 11, 33); // 返回 2 。33 在整个子数组中出现 2 次。



我们可以使用 二分搜索 + 哈希表 来优化查询：
	1.	预处理时：  使用哈希表 map 存储每个值的索引数组，这样 query 时能直接查找索引范围。
	2.	查询时：  使用 二分查找（Binary Search） 快速找到 left 和 right 的位置，时间复杂度降至 O(log n)。
 */

/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function (arr) {
  this.source = {};

  for (let i = 0; i < arr.length; i++) {
    if (!this.source[arr[i]]) {
      this.source[arr[i]] = [[i, i]];
      this.source[arr[i]].num = 1;
    } else {
      const range = this.source[arr[i]];
      const endRange = range[range.length - 1];

      if (endRange[1] === i - 1) {
        endRange[1] = i;
      } else {
        range.push([i, i]);
      }

      this.source[arr[i]].num++;
    }
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function (left, right, value) {
  const source = this.source[value];
  if (!source) return 0;

  let res = source.num;

  for (let i = 0; i < source.length; i++) {
    const range = source[i];

    if (left <= range[0]) break;
    if (left > range[0] && left <= range[1]) {
      res = res - (left - range[0]);
      break;
    }

    res = res - (range[1] - range[0] + 1);
  }

  for (let i = source.length - 1; i >= 0; i--) {
    const range = source[i];

    if (right >= range[1]) break;
    if (right < range[1] && right >= range[0]) {
      res = res - (range[1] - right);
      break;
    }

    res = res - (range[1] - range[0] + 1);
  }

  return res;
};

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */

const range = new RangeFreqQuery([12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]);
console.log(range.query(1, 2, 4));
console.log(range.query(0, 11, 33));
