/**
 * 365. 水壶问题
 * 有两个水壶，容量分别为 jug1Capacity 和 jug2Capacity 升。水的供应是无限的。确定是否有可能使用这两个壶准确得到 targetCapacity 升。
 *
 * 如果可以得到 targetCapacity 升水，最后请用以上水壶中的一或两个来盛放取得的 targetCapacity 升水。
 *
 * 你可以：
 * 装满任意一个水壶
 * 清空任意一个水壶
 * 从一个水壶向另外一个水壶倒水，直到装满或者倒空
 *
 *
 * 解题思路：
 * BFS
 */

/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {
  let sum = 0;
  let source = [jug1Capacity, jug2Capacity];
  let res = false;

  if (jug1Capacity > jug2Capacity) {
    let d = jug2Capacity - (jug1Capacity % jug2Capacity);
    source.push(d);
  } else {
    let d = jug1Capacity - (jug2Capacity % jug1Capacity);
    source.push(d);
  }

  console.log(source);

  dfs();
  function dfs() {
    if (res) return;
    if (sum > targetCapacity) return;
    if (sum === targetCapacity) return (res = true);
    for (let i = 0; i < 3; i++) {
      sum += source[i];
      dfs();
      sum -= source[i];
    }
  }

  return res;
};

console.log(canMeasureWater(34, 5, 6));
console.log(canMeasureWater(3, 5, 4));
console.log(canMeasureWater(2, 6, 5));
console.log(canMeasureWater(1, 2, 3));
