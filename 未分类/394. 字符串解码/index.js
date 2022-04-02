/**
 * 394. 字符串解码
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 *
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 *
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 *
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 *
 *
 * 解题思路：
 * 维护两个栈。
 * 1. 数字栈：当数字栈为空且要入栈时，弹出字符栈元素 并入 res。（因为此时前面的字符不会被循环了）
 * 2. 字符栈：当数字栈为空且要入栈时，弹出字符栈元素 并入 res。（因为此时前面的字符不会被循环了）。
 *           当字符栈为空 或者 小于数字栈时，代表当前循环完了的字符还在前一次循环中，需要并入上一个字符栈尾。
 * 3. 循环：
 *        - 当前为数字，入数字栈
 *        - 当前为字符，入字符栈
 *        - 当前为 [，更新 flag，标志下一个数字或字符为新元素，需要 push，否则的话是加在栈尾元素上（表示还没有完 比如 12[a]）。
 *        - 当前为 ]，出数字栈尾，字符栈尾，进行一次循环拼接字符串，
 *          然后判断：当字符栈为空 或者 小于数字栈时，代表当前循环完了的字符还在前一次循环中，需要并入上一个字符栈尾。
 *
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let res = "";
  const strStack = []; // 字符单调栈，遇到 [ 入栈，遇到 ] 出栈结算
  let strNew = true; // 为 true 时可入栈
  const numStack = []; // 数字单调栈，遇到数字入栈
  let numNew = true; // 为 true 时可入栈

  for (let i = 0; i < s.length; i++) {
    // 数字
    if (/^[0-9]/.test(s[i])) {
      if (numNew) {
        if (numStack.length === 0) {
          const s1 = strStack.pop();
          res += s1 === undefined ? "" : s1;
        }
        numStack.push(s[i]);
        numNew = false;
      } else {
        numStack[numStack.length - 1] += s[i];
      }
      continue;
    }
    // 字母
    if (/^[a-z]/.test(s[i])) {
      if (strNew) {
        strStack.push(s[i]);
        strNew = false;
      } else {
        strStack[strStack.length - 1] += s[i];
      }
      continue;
    }
    // [ 新成员入栈
    if (s[i] === "[") {
      numNew = true;
      strNew = true;
      continue;
    }
    // ] 出栈结算
    if (s[i] === "]") {
      let len = Number(numStack.pop());
      let str = strStack.pop();
      let end = "";
      for (let j = 0; j < len; j++) {
        end += str;
      }
      // 加到上一项
      if (numStack.length === 0) {
        res += end;
        numNew = true;
        strNew = true;
        continue;
      }
      if (strStack.length === 0 || strStack.length < numStack.length) {
        strStack.push(end);
      } else {
        strStack[strStack.length - 1] += end;
      }
      numNew = true;
      // strNew = true;
    }
  }

  // 组合
  for (let i = 0; i < strStack.length; i++) {
    res += strStack[i];
  }

  return res;
};
