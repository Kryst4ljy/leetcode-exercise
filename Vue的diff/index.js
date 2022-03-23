/**
 * Vue 的 diff 算法
 * 虚拟 DOM 节点进行更新时，找到最小的变化节点，进行最小量的更新。
 * 追求能复用旧节点就复用旧节点。
 *
 *
 * oldVnode = [1,2,3], vNode = [3,4,2,5,1];
 * 目标：复用 1，2，3， 插入 4，5。
 */

/**
 *
 * @param {vnode} oldVnode
 * @param {vnode} vnode
 * @returns {vnode}
 * @description 使用首尾指针对比，减少时间复杂度。
 */
function diff(oldVnode, vnode) {
  if (oldVnode === vnode) return;
  let res = []; // 返回的真实节点
  let l1 = 0;
  let r1 = oldVnode.length - 1;
  let l2 = 0;
  let r2 = vnode.length - 1;

  while (l1 <= r1 && l2 <= r2) {
    // 头部先匹配
    if (oldVnode[l1] === vnode[l2]) {
      res[l2] = oldVnode[l1];
      l1++;
      l2++;
      continue;
    }
    // old头 匹配 v尾
    if (oldVnode[l1] === vnode[r2]) {
      res[r2] = oldVnode[l1];
      l1++;
      r2--;
      continue;
    }
    // old尾 匹配 v头
    if (oldVnode[r1] === vnode[l2]) {
      res[l2] = oldVnode[r1];
      l2++;
      r1--;
      continue;
    }
    // 尾部匹配
    if (oldVnode[r1] === vnode[r2]) {
      res[r2] = oldVnode[r1];
      r1--;
      r2--;
    }
    // 首尾均未匹配到，进行 oldVnode 的扫描。
    let f = false; // 是否匹配到了结果
    for (let i = l1; i <= r1; i++) {
      if (oldVnode[i] === vnode[l2]) {
        res[l2] = oldVnode[i];
        f = true;
        break;
      }
    }
    if (!f) {
      res[l2] = vnode[l2];
    }
    l2++;
  }

  return res;
}

console.log(diff([1, 2, 4, 3, 3], [4, 5, 6, 2]));
