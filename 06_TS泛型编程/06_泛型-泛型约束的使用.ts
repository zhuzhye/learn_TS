interface ILength {
  length: number;
}
// 1. getLength没有必要用泛型
function getLength(arg: ILength) {}
getLength("zzz");
getLength(["aaa", "bbb", "ccc"]);

// 2.获取传入内容，这个内容必须有length属性
// type相当于是变量，记录本次调用的类型，所以在整个函数执行周期中，一直保留参数的类型
function getInfo<T extends ILength>(args: T): T {
  return args;
}
let res1 = getInfo("zzz");
let res2 = getInfo(["aaa", "bbb", "ccc"]);

// 2.获取传入的内容，这个内容要有length属性

export {};
