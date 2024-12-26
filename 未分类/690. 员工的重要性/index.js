/**
 * 你有一个保存员工信息的数据结构，它包含了员工唯一的 id ，重要度和直系下属的 id 。

  给定一个员工数组 employees，其中：

  employees[i].id 是第 i 个员工的 ID。
  employees[i].importance 是第 i 个员工的重要度。
  employees[i].subordinates 是第 i 名员工的直接下属的 ID 列表。
  给定一个整数 id 表示一个员工的 ID，返回这个员工和他所有下属的重要度的 总和。

  eg.1
  输入：employees = [[1,5,[2,3]],[2,3,[]],[3,3,[]]], id = 1
  输出：11
  解释：
  员工 1 自身的重要度是 5 ，他有两个直系下属 2 和 3 ，而且 2 和 3 的重要度均为 3 。因此员工 1 的总重要度是 5 + 3 + 3 = 11 。

  eg.2
  输入：employees = [[1,2,[5]],[5,-3,[]]], id = 5
  输出：-3
  解释：员工 5 的重要度为 -3 并且没有直接下属。
  因此，员工 5 的总重要度为 -3。
 */

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const map = {};

  for (let i = 0; i < employees.length; i++) {
    map[employees[i].id] = employees[i];
  }

  let sum = map[id].importance;

  function deep(node) {
    if (node.subordinates.length === 0) return;

    for (let i = 0; i < node.subordinates.length; i++) {
      const item = map[node.subordinates[i]];
      sum += item.importance;

      deep(item);
    }
  }

  deep(map[id]);

  return sum;
};

const _employees = [
  { id: 1, importance: 5, subordinates: [2, 3] },
  { id: 2, importance: 3, subordinates: [] },
  { id: 3, importance: 3, subordinates: [] },
];
const _id = 1;

const res = GetImportance(_employees, _id);
console.log('res', res);
