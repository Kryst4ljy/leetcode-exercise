/**
 * 47. 全排列 2
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 *
 *
 * 解题思路：
 * 回溯 + 剪枝
 * 剪枝：记录已经遍历过的层级，下一层不再遍历当前层级元素，就能避免重复遍历当前元素
 *
 * 示例1:
 * 输入：nums = [1,1,2]
 * 输出：[[1,1,2], [1,2,1], [2,1,1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const set = new Set();
  const path = [];
  const deep = [];

  dfs(nums);
  function dfs(arr) {
    if (path.length === nums.length) {
      set.add(path.toString());
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (deep.includes(i)) continue; // 层级
      path.push(arr[i]);
      deep.push(i);
      dfs(arr);
      path.pop();
      deep.pop();
    }
  }

  const res = [];
  for (let key of set) {
    res.push(key.split(','));
  }

  return res;
};

console.log(permuteUnique([1, 1, 3]));

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique1 = function (nums) {
  var max = nums.length;
  var res = [];
  var map = {};

  dfs(1, [], []);

  function dfs(deep, indexs, source) {
    if (deep > max) {
      var tag = source.join('');
      if (!map[tag]) {
        map[tag] = 1;
        res.push(source);
      }
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!indexs.includes(i)) {
        dfs(deep + 1, [...indexs, i], [...source, nums[i]]);
      }
    }
  }

  return res;
};
