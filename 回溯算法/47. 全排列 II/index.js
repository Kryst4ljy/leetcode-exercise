/**
 * 47. 全排列 2
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
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
  let res = [];
  const path = [];

  const check = [...nums];
  quickSort(check, 0, check.length - 1);
  const checkStr = check.toString();
  const set = [];

  dfs(path);
  function dfs(path) {
    if (path.length === nums.length) {
      const pathStr = path.toString();
      const nums = [...path];
      quickSort(nums, 0, nums.length - 1);
      if (checkStr === nums.toString() && !set.includes(pathStr)) {
        set.push(pathStr);
        res.push([...path]);
      }
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(path);
      path.pop();
    }
  }

  function quickSort(arr, left, right) {
    if (left >= right) return;
    let key = arr[left];
    let l = left;
    let r = right;

    while (l < r) {
      while (l < r && arr[r] >= key) {
        r--;
      }
      arr[l] = arr[r];
      while (l < r && arr[l] <= key) {
        l++;
      }
      arr[r] = arr[l];
    }

    arr[l] = key;
    quickSort(arr, left, l);
    quickSort(arr, l + 1, right);
  }

  return res;
};

console.log(permuteUnique([1, 1, 2]));
