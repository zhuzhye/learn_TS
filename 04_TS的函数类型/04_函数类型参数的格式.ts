// TypeScript对于传入的函数类型的参数个数不进行检测 ，多余的参数会被忽略掉
type CalcType = (num1: number, num2: number) => number;
function calc(clacFn: CalcType) {
  clacFn(10, 12);
}

// const aa = function (x1: number, x2: number): number {
//   return x1 + x2;
// };

// calc(aa);

calc(function () {
  return 123;
});
// forEach栗子

const names = ["abc", "calc", "   as "];
names.forEach((item, index) => {
  console.log(item.length);
});

// 举个例子
interface IPerson {
  name: string;
  age: number;
}
// 取决于对象是否第一次定义
const p = {
  name: "shy",
  age: 19,
  height: 1.88,
};
const info: IPerson = p;
export {};
