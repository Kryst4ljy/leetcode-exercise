/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 *
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 *
 * 进阶：
 * 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 *
 *
 *
 * 解题思路：
 * 二分 + 中心扩散
 *
 *
 * 示例：
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1]; // 特判
  let res = [-1, -1];

  midSearch(0, nums.length - 1);
  function midSearch(l, r) {
    if (l > r) return;
    let mid = Math.floor((r - l + 1) / 2) + l;
    if (nums[mid] < target) {
      // 最小差值且无法再次二分
      if (r === l) return;
      midSearch(mid, r);
    } else if (nums[mid] > target) {
      // 最小差值且无法再次二分
      if (r === l) return;
      // 最小差值且向左二分
      if (r - l === 1 && mid === r) {
        mid = l;
      }
      midSearch(l, mid);
    } else {
      console.log("中心扩散", l, r, mid);
      res = [mid, mid];
      // 中心扩散
      let s = mid - 1;
      let flagS = true;
      let e = mid + 1;
      let flagE = true;
      while ((s >= 0 || e < nums.length) && (flagS || flagE)) {
        console.log(s, e);
        if (nums[s] === target) {
          res[0] = s;
        } else {
          flagS = false;
        }
        if (nums[e] === target) {
          res[1] = e;
        } else {
          flagE = false;
        }
        s--;
        e++;
      }
    }
  }

  return res;
};

console.log(searchRange([1, 1], 1));
