/*
1、金额格式化
1000000 => 1,000,000
10.24 => 10.24
*/

function test1(str) {
  // 1. 根据小数点切割字符串
  let arr = str.split(".");

  // 2. 获取需要格式化的部分 - 进行格式化
  const tans = arr[0].split("");
  console.log(tans);
  let res = "";
  for (let i = tans.length - 1, j = 0; i >= 0; i--, j++) {
    if (j !== 0 && j % 3 === 0) {
      res = `${tans[i]},` + res;
    } else {
      res = tans[i] + res;
    }
  }

  return res + (arr[1] === undefined ? "" : "." + arr[1]);
}

console.log(test1("1000000"));
console.log(test1("10.24"));
