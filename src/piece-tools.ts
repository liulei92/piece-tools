/**
 * @Date: 2024-08-09 18:38:26
 * @Author: Lei Liu
 * @description: 如果数组所有元素满足函数条件，则返回true。调用时，如果省略第二个参数，则默认传递布尔值。all([4, 2, 3], x => x > 1); // true
 * @param {T} arr
 * @param {*} fn
 * @return {*}
 */
export function all<T>(arr: T[], fn = Boolean) {
  return arr.every(fn);
}

/**
 * @Date: 2024-08-09 18:39:11
 * @Author: Lei Liu
 * @description: 判断数组中的元素是否都相等 allEqual([1, 2, 3, 4, 5, 6]); // false
 * @param {T} arr
 * @return {*}
 */
export function allEqual<T>(arr: T[]) {
  return arr.every((val) => val === arr[0]);
}

/**
 * @Date: 2024-08-13 10:09:47
 * @Author: Lei Liu
 * @description: 此代码示例检查两个数字是否近似相等，差异值可以通过传参的形式进行设置 approximatelyEqual(Math.PI / 2.0, 1.5708); // true
 * @param {number} v1
 * @param {number} v2
 * @param {*} epsilon
 * @return {*}
 */
export function approximatelyEqual(v1: number, v2: number, epsilon = 0.001) {
  return Math.abs(v1 - v2) < epsilon;
}

/**
 * @Date: 2024-08-13 10:12:18
 * @Author: Lei Liu
 * @description: 此段代码将没有逗号或双引号的元素转换成带有逗号分隔符的字符串即CSV格式识别的形式。arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
 * @param {string} arr
 * @param {*} delimiter
 * @return {*}
 */
export function arrayToCSV(arr: string[][], delimiter = ',') {
  return arr.map((v) => v.map((x) => `"${x}"`).join(delimiter)).join('\n');
}

/**
 * @Date: 2024-08-13 10:14:34
 * @Author: Lei Liu
 * @description: 此段代码执行一个函数，将剩余的参数传回函数当参数，返回相应的结果，并能捕获异常。
 * @param {*} fn
 * @param {array} args
 * @return {*}
 */
export function attempt(fn: Function, ...args: any[]) {
  try {
    return fn(...args);
  } catch (e: any) {
    return e instanceof Error ? e : new Error(e);
  }
}

/**
 * @Date: 2024-08-13 10:16:15
 * @Author: Lei Liu
 * @description: 此段代码返回两个或多个数的平均数。 average(...[1, 2, 3]); // 2
 * @param {array} nums
 * @return {*}
 */
export function average(...nums: number[]) {
  return nums.reduce((acc, val) => acc + val, 0) / nums.length;
}
