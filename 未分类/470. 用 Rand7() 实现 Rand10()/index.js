/**
 * 470. 用 Rand7() 实现 Rand10()
 * 给定方法 rand7 可生成 [1,7] 范围内的均匀随机整数，试写一个方法 rand10 生成 [1,10] 范围内的均匀随机整数。
 * 你只能调用 rand7() 且不能调用其他方法。请不要使用系统的 Math.random() 方法。
 * 每个测试用例将有一个内部参数 n，即你实现的函数 rand10() 在测试时将被调用的次数。请注意，这不是传递给 rand10() 的参数。
 *
 *
 * 解题思路：
 * 首先生成一个 0 1 2 3 4 5 6
 * 然后乘 7 得到一个 0 7 14 21 28 35 42
 * 再加 rand7，即可获得 1-49 之间的等概率的随机数
 * 最后返回 1-10 区间的即可
 */

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  // let sum = rand7();
  // sum--; // 0 1 2 3 4 5 6
  // sum *= 7; // 0 7 14 21 28 35 42
  // sum += rand7(); // {0 7 14 21 28 35 42} + {1, 2, 3, 4, 5, 6, 7} = 1 - 49

  while (true) {
    let sum = (rand7() - 1) * 7 + rand7();
    if (sum <= 10) return sum;
  }
};
