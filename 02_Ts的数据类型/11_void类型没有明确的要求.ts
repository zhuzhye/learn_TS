// 当基于上下文的类型推导，推导出来的返回类型为void时，并不会强制函数一定要返回内容
const names = ["abc", "cba", "nba"];

names.forEach((item, index, arr): number => {
  return 123;
});
