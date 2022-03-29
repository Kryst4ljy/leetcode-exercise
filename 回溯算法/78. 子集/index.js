/**
 * 78. 子集
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 *
 *
 * 解题思路：
 * 回溯 + 剪枝
 * 剪枝在于 比只记录递增的 path
 *
 *
 * 示例：
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const path = [];
  const res = [[]];

  dfs(1);
  function dfs(deep) {
    for (let i = 0; i < nums.length; i++) {
      if (path.length > 0 && path[path.length - 1] >= nums[i]) continue;
      path.push(nums[i]);
      if (deep === path.length) {
        res.push([...path]);
      }
      dfs(deep + 1);
      path.pop();
    }
  }

  return res;
};

console.log(subsets([1, 2, 3]));
