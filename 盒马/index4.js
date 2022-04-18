/*
3、CSS颜色转换
#0000FF => rgb(0, 0, 255)
#A37 => rgb(170, 51, 119)
#huahs => invalid
*/

function test3(str) {
  let arr = str.split("");
  // 不是 # 开头
  if (arr[0] !== "#") return "invalid";

  // 遍历
  let a1 = 0;
  let a2 = 0;
  let a3 = 0;
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    if (!/^[0-9a-fA-F]/.test(arr[i])) return "invalid";
    // 字母
  }
}

console.log(test3("#0000FF"));
console.log(test3("#A37"));
console.log(test3("#huahs"));
