// 需求：只能将两个数字进行相加
function add(arg1, arg2) {
  return arg1 + arg2;
}

add(10, 20);
add("abc", "acb");

// 1.实现两个函数

function add1(num1: number, num2: number) {
  return num1 + num2;
}

function add2(num1: string, num2: string) {
  return num1 + num2;
}
// 2.错误做法
// function add3(arg1: number | string, arg2: number | string) {
//   return arg1+arg2
// }

// 3. TypeScript中函数的重载写法
// 3.1 先编写重载签名
// 3.2 编写通用的函数实现
// 有重载函数的情况下，无法调用通用函数
function addx(arg1: number, arg2: number): number;
function addx(arg1: string, arg2: string): string;
// 通用函数
function addx(arg1: any, arg2: any): any {
  return arg1 + arg2;
}
addx("13", "23");
addx(10, 20);
export {};
