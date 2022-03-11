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
 * 解题思路：--- 错误错误 待解决
 * 1. 去除一个节点后，遍历 parents 数组，下标进入 path 数组。
 * 比如：parents = [-1,2,0,2,0]，去除第一个节点后为 parents = [undefined,2,0,2,0] & path = [0]
 *
 * 2. 然后开始一个一个寻路，找到顶点后计算当前的节点的长度
 * parents[1]-parents[2]-parents[0]，跳出且存入长度，此时 path = [0,1,2]
 *
 * 3. 然后下次从 3 开始寻路，最终计算结果
 */

/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function (parents) {
  let res = 0;
  let path = [];
  let map = {}; // 保存子节点树长度
  let cut = 0; // 当前剪掉的节点
  let current = 0; // 当前指针
  let lenArr = [];

  while (current < parents.length) {
    if (current === cut || path.includes(current)) {
      current++;
      continue;
    }

    let len = 0;
    let index = current;
    while (true) {
      path.push(index); // 记录当前节点
      if (index !== cut) {
        len++;
        index = parents[index];
        continue;
      } else {
        console.log("cut", index, len);
        lenArr.push(++len);
        len = 0;
        break;
      }
    }
  }

  console.log(lenArr);
};

console.log(countHighestScoreNodes([-1, 2, 0, 2, 0]));
