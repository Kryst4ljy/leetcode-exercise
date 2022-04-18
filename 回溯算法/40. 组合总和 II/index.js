/**
 * 40. 组合总和 II
 * 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 *
 * candidates 中的每个数字在每个组合中只能使用 一次 。
 *
 * 注意：解集不能包含重复的组合。
 *
 *
 * 解题思路：
 * 回溯 + 剪枝
 * 剪枝：剪去当前层级的分支
 * 
 * 
 * 归纳总结：
 * 1. 遇到不能重复的回溯，要想到有个 deep 去记录当前的层级，每次都从前一层级开始遍历。
 * 2. 然后要考虑当前遍历到的元素，是否与前一元素重复，重复的话直接跳过当前元素，因为现在这个分支一定是前一分支的子分支。
 * 3. 还需要先排序，因为最后要去重。
 * 
 *
 *
 * 示例：
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 输出:
 * [
 * [1,1,6],
 * [1,2,5],
 * [1,7],
 * [2,6]
 * ]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  // 1. 排序
  quick(candidates, 0, candidates.length - 1);
  function quick(arr, left, right) {
    if (left >= right) return;
    let l = left;
    let r = right;
    let key = arr[l];

    while (l < r) {
      while (l < r && arr[r] <= key) {
        r--;
      }
      arr[l] = arr[r];
      while (l < r && arr[l] >= key) {
        l++;
      }
      arr[r] = arr[l];
    }

    arr[l] = key;
    quick(arr, left, l);
    quick(arr, l + 1, right);
  }

  console.log(candidates);

  // 2. 回溯 + 剪枝
  const res = [];
  const path = [];

  dfs(path, 0, 0);
  function dfs(path, deep, sum) {
    if (sum > target) return;
    if (sum === target) {
      let str = path.join(",");
      !res.includes(str) && res.push(str);
      return;
    }
    if (path.length >= candidates.length) return;

    for (let i = deep; i < candidates.length; i++) {
      if (i > deep && candidates[i] === candidates[i - 1]) continue; // 精华：剪去上一次递归中，同样的枝条
      path.push(candidates[i]);
      sum += candidates[i];
      dfs(path, i + 1, sum);
      path.pop();
      sum -= candidates[i];
    }
  }

  for (let i = 0; i < res.length; i++) {
    res[i] = res[i].split(",");
  }
  return res;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// console.log(combinationSum2([1, 2, 5], 8));
// console.log(
//   combinationSum2(
//     [
//       1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//       1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//       1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//       1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     ],
//     30
//   )
// );
