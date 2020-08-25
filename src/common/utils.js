/* 防抖函数
 *  参数 执行函数 延迟时间
 *  返回 函数
 */
export function debounce(func,delay) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this)
    },delay);
  }
}
