/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 * 示例1:
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") return [];
  const data = [
    [],
    [],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  const nums = [];
  let res = [];
  const path = [];

  digits.split("").forEach((m) => {
    nums.push(data[m]);
  });

  dfs(path, 0);
  function dfs(path, index) {
    if (path.length === nums.length) {
      res.push(path.join(""));
      return;
    }
    for (let i = 0; i < nums[index].length; i++) {
      path.push(nums[index][i]);
      dfs(path, index + 1);
      path.pop();
    }
  }

  return res;
};

console.log(letterCombinations("234"));
