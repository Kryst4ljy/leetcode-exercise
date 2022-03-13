/**
 * 2049. 统计最高分的节点数目
 * 给你一棵根节点为 0 的 二叉树 ，它总共有 n 个节点，节点编号为 0 到 n - 1 。同时给你一个下标从 0 开始的整数数组 parents 表示这棵树，其中 parents[i] 是节点 i 的父节点。由于节点 0 是根，所以 parents[0] == -1 。
 *
 * 一个子树的 大小 为这个子树内节点的数目。每个节点都有一个与之关联的 分数 。求出某个节点分数的方法是，将这个节点和与它相连的边全部 删除 ，剩余部分是若干个 非空 子树，这个节点的 分数 为所有这些子树 大小的乘积 。
 *
 * 请你返回有 最高得分 节点的 数目 。
 *
 * 示例看图
 *
 * 解题思路：
 * 1. 去除一个节点后，数组置为 -2，代表已经被去除的节点。
 * 2. 从头开始遍历，先定义一个节点集合。扫到非 -2 的，保存此节点到节点集合中，继续寻路直到 -2，至此拿到了当前的一个子树。
 * 3. 将子树的根节点作为 key，存入该子树到一个 map 中，继续遍历，直到获取到所有子树 map 集合。
 * 4. 计算。
 *
 */

/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function (parents) {
  let res = {};

  for (let i = 0; i < parents.length; i++) {
    const arr = [...parents];
    arr[i] = -2;
    d(arr);
  }

  function d(arr) {
    let map = {}; // 子树集合
    let key = 0; // 当前节点
    let current = key; // 当前指针
    let set = new Set();

    while (key < arr.length) {
      // 当前为空节点或者 0 根节点
      if (arr[current] === -2 || arr[current] === -1) {
        current = ++key;
        continue;
      }
      // 当前为子树节点
      set.add(current); // 先存入
      // 自己为根节点
      if (arr[arr[current]] === -2) {
        // 已经存在子树 - 添加节点
        if (map[current]) {
          for (let i of set) {
            map[current].add(i);
          }
        } else {
          // 不存在子树 - 直接新增子树
          map[current] = set;
        }
        set = new Set();
        current = ++key;
        continue;
      } else if (arr[arr[current]] === -1) {
        // 下一个节点为 0 根节点
        // 已经存在子树 - 添加节点
        if (map["0"]) {
          for (let i of set) {
            map["0"].add(i);
          }
        } else {
          // 不存在子树 - 直接新增子树
          map["0"] = set.add(0);
        }
        set = new Set();
        current = ++key;
        continue;
      } else {
        current = arr[current];
      }
    }

    console.log(map);

    // 结算
    let len = 1;
    for (let key in map) {
      len *= map[key].size;
    }

    res[len] ? res[len]++ : (res[len] = 1);
  }

  let sum = 0;
  for (let i in res) {
    sum = Math.max(sum, i);
  }

  return res[sum];
};

console.log(countHighestScoreNodes([-1, 3, 3, 5, 7, 6, 0, 0]));
