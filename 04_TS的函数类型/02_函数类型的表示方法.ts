// 方案一：函数类型表达式：function type expression
// 格式：(参数列表)=>返回值
type BarType = (num: number) => number;
const bar: BarType = (args: number): number => {
  return 123;
};

export {};
