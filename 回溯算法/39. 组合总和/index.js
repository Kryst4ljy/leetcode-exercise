/**
 * 39. 组合总和
 * 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
 * candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。
 * 对于给定的输入，保证和为 target 的不同组合数少于 150 个。
 *
 *
 * 解题思路：
 * 回溯 + 剪枝
 * 剪枝：数字大于 target 后返回。
 *
 *
 * 示例：
 * 输入：candidates = [2,3,6,7], target = 7
 * 输出：[[2,2,3],[7]]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const path = [];
  const res = [];
  let sum = 0;

  dfs();
  function dfs() {
    for (let i = 0; i < candidates.length; i++) {
      if (path.length > 0 && path[path.length - 1] > candidates[i]) continue;
      if (sum + candidates[i] > target) continue;
      if (sum + candidates[i] === target) {
        res.push([...path, candidates[i]]);
        continue;
      }
      // 记录
      path.push(candidates[i]);
      sum += candidates[i];
      dfs();
      sum -= candidates[i];
      path.pop();
    }
  }

  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
