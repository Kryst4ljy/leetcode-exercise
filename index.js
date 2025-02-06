var arr = [1, 2, 3];

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  var max = nums.length;
  var res = [];

  dfs(1, [], []);

  function dfs(deep, indexs, source) {
    if (deep > max) {
      res.push(source);
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

console.log(permuteUnique(arr));
