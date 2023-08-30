type calcType = (num1: number, num2: number) => number;
function calc(calcFn: calcType) {}
// 2.函数的调用
function sum(num1: number, num2: number) {
  return num1 + num2;
}
function foo(num1: number) {
  return num1;
}
calc(sum);
calc(foo);
function mul(num1: number, num2: number) {
  return num1 + num2;
}

// 3.使用匿名函数
calc(function (num1, num2) {
  return num1 + num2;
});

export {};
