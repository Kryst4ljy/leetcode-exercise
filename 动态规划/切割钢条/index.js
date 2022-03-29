/**
 * 切割钢条
 * 1，2，3， 4， 5， 6， 7， 8， 9，10
 * 1，5，8，16，10，17，17，20，24，30
 *
 * 输入：n，
 * 输出最大值。
 */

const map = {
  1: 1,
  2: 5,
  3: 8,
  4: 16,
  5: 10,
  6: 17,
  7: 17,
  8: 20,
  9: 24,
  10: 30,
};

/**
 * 深度优先遍历，遍历每一种情况，树结构
 * 优化：剪枝，长度大于输入时，直接跳过。
 */
function func1(n) {
  const path = [];
  let sum = 0;
  let price = 0;
  let res = 0;

  dfs();
  function dfs() {
    if (sum === n) {
      console.log(price, path);
      res = Math.max(price, res);
      return;
    }
    if (sum > n) return;
    for (let i = 1; i < n + 1; i++) {
      path.push(i);
      sum += i;
      price += map[i];
      dfs();
      sum -= i;
      price -= map[i];
      path.pop();
    }
  }

  return res;
}

console.log(func1(10));
