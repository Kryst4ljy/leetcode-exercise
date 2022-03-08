// 模版
// 2 + 1：两个变量，一个递归函数
function backtrack(nums) {
  let res = []; // 返回的结果数组
  const path = []; // 记录的路径数组

  bfs(path, 0);

  function bfs(path, index) {
    // 递归终止条件

    for (let i = 0; i < nums[index].length; i++) {
      path.push();
      // 处理
      bfs(path, index + 1);
      path.pop();
    }
  }
}
