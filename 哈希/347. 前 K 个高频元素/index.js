/**
 * 347. 前 K 个高频元素
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 *
 *
 *
 * 解题思路：
 * 哈希表存储结果，辅助栈存储返回结果
 *
 *
 *
 * 示例：
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }

  let res = [];
  for (let key in map) {
    if (res.length === 0) {
      res.push(key);
    } else {
      let f = false;
      for (let i = res.length - 1; i >= 0; i--) {
        if (map[res[i]] >= map[key]) {
          res.splice(i + 1, 0, key);
          f = true;
          break;
        }
      }
      !f && res.unshift(key);
    }
  }

  return res.slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
