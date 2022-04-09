/**
 * 实现一个 query 方法，实现对数据的链式查询和处理
 *
 * query 传入参数为原始数据（数组格式，每个元素都是对象）
 * 通过进行链式调用对数据执行操作，支持的方法有
 * where(predicate): 根据参数的条件进行筛选，参数与 [].filter 的参数类似
 * orderBy(key, desc): 根据 key 的值进行排列，默认升序排列，当第二个参数为 true 时降序排列
 * groupBy(key): 根据 key 的值对数据元素进行分组，合并为二维数组
 * execute(): 执行所有处理并返回最终结果
 * 执行 execute 方法时才真正执行操作并返回结果
 * 请结合下面示例理解需求
 */

function query(val) {
  return new Query(val);
}

class Query {
  constructor(data) {
    if (Object.prototype.toString.call(data) !== "[object Array]") {
      console.error("入参格式错误 Array");
      return;
    }
    this.data = data; // 原数据
  }

  // where 方法
  where(predicate) {
    if (Object.prototype.toString.call(predicate) !== "[object Function]") {
      console.error("入参格式错误 Function");
      return;
    }
    this.data = this.data.filter(predicate);
    return this;
  }

  // orderBy 方法
  orderBy(key, desc) {
    // 升序
    if (!desc) {
      this.data.sort((a, b) => a[key] - b[key]);
    } else {
      // 降序
      this.data.sort((a, b) => b[key] - a[key]);
    }
    return this;
  }

  // groupBy 方法
  groupBy(key) {
    const map = new Map();

    for (let i = 0; i < this.data.length; i++) {
      let currentKey = this.data[i][key]; // 当前值
      if (map.has(currentKey)) {
        const arr = map.get(currentKey);
        arr.push(this.data[i]);
        map.set(currentKey, arr);
      } else {
        map.set(currentKey, [this.data[i]]);
      }
    }

    const res = [];
    map.forEach((m) => {
      res.push(m);
    });

    this.data = res;
    return this;
  }

  // execute 方法
  execute() {
    return this.data;
  }
}

// 示例
const data = [
  { name: "foo", age: 16, city: "shanghai" },
  { name: "bar", age: 24, city: "hangzhou" },
  { name: "fiz", age: 22, city: "shanghai" },
  { name: "baz", age: 19, city: "hangzhou" },
];

const res = query(data)
  .where((item) => item.age > 18)
  .orderBy("age", true)
  .groupBy("city")
  .execute();
console.log(res);
