/**
 * 15. 三数之和
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 * 解题思路：
 *
 *
 *
 * 示例：
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  const resStr = [];
  const path = [];

  divide(nums, 0, nums.length - 1);

  dfs(path, 0, 0, 0);
  function dfs(path, deep, key, sum) {
    if (path.length === 3 && sum === 0) {
      let str = path.join("");
      if (!resStr.includes(str)) {
        res.push([...path]);
        resStr.push(str);
      }
      return;
    }
    if (path.length >= 3) return;
    if (deep >= 3) return;
    for (let i = key; i < nums.length; i++) {
      sum += nums[i];
      path.push(nums[i]);
      deep++;
      dfs(path, deep, i + 1, sum);
      deep--;
      sum -= nums[i];
      path.pop();
    }
  }

  function divide(arr, left, right) {
    if (left > right) return;
    if (left === right) {
      return;
    }
    let mid = Math.floor((right - left + 1) / 2) + left;
    divide(arr, left, mid - 1);
    divide(arr, mid, right);
    cure(arr, left, mid, right);
  }

  function cure(arr, left, mid, right) {
    const res = [];
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
      if (arr[key1] >= arr[key2]) {
        res[i] = arr[key2++];
      } else {
        res[i] = arr[key1++];
      }
    }

    for (let i = 0; i < res.length; i++) {
      arr[i + left] = res[i];
    }
  }

  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
