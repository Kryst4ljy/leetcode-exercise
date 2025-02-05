/**
 * 90. 子集 II
 * 
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的 
子集
（幂集）。

解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

 

示例 1：

输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
示例 2：

输入：nums = [0]
输出：[[],[0]]
 

提示：

1 <= nums.length <= 10
-10 <= nums[i] <= 10
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let map = {};
  const res = [[]];

  mergeSort(nums);

  function dfs(prev, index) {
    if (index >= nums.length) return;

    const current = [...prev, nums[index]];
    const tag = current.join('');
    if (!map[tag]) {
      map[tag] = 1;
      res.push(current);
    }

    for (let i = index + 1; i < nums.length; i++) {
      dfs(current, i);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    dfs([], i);
  }

  return res;
};

function mergeSort(arr) {
  divide(arr, 0, arr.length - 1);

  // 分
  function divide(arr, left, right) {
    if (left >= right) return;
    let mid = Math.floor((right - left + 1) / 2) + left;
    divide(arr, left, mid - 1);
    divide(arr, mid, right);
    // 治
    cure(arr, left, mid, right);
  }

  // 治
  function cure(arr, left, mid, right) {
    let res = [];
    let index = 0;
    let key1 = left;
    let key2 = mid;

    // 合并两个排序数组 - 核心为细分到最小
    while (index < right - left + 1) {
      if (key1 === mid) {
        res[index] = arr[key2];
        key2++;
        index++;
        continue;
      }
      if (key2 === right + 1) {
        res[index] = arr[key1];
        key1++;
        index++;
        continue;
      }
      if (arr[key1] > arr[key2]) {
        res[index] = arr[key2];
        key2++;
      } else {
        res[index] = arr[key1];
        key1++;
      }
      index++;
    }

    // 修改原数组
    for (let i = 0; i < res.length; i++) {
      arr[i + left] = res[i];
    }
  }

  return arr;
}
