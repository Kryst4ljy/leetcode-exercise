/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function (arr) {
  this.source = {};

  for (let i = 0; i < arr.length; i++) {
    if (!this.source[arr[i]]) {
      this.source[arr[i]] = [[i, i]];
      this.source[arr[i]].num = 1;
    } else {
      const range = this.source[arr[i]];
      const endRange = range[range.length - 1];

      if (endRange[1] === i - 1) {
        endRange[1] = i;
      } else {
        range.push([i, i]);
      }

      this.source[arr[i]].num++;
    }
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function (left, right, value) {
  const source = this.source[value];
  if (!source) return 0;

  let res = source.num;

  for (let i = 0; i < source.length; i++) {
    const range = source[i];

    if (left <= range[0]) break;
    if (left > range[0] && left <= range[1]) {
      res = res - (left - range[0]);
      break;
    }

    res = res - (range[1] - range[0] + 1);
  }

  for (let i = source.length - 1; i >= 0; i--) {
    const range = source[i];

    if (right >= range[1]) break;
    if (right < range[1] && right >= range[0]) {
      res = res - (range[1] - right);
      break;
    }

    res = res - (range[1] - range[0] + 1);
  }

  return res;
};

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */

const range = new RangeFreqQuery([12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]);
console.log(range.query(1, 2, 4));
console.log(range.query(0, 11, 33));
