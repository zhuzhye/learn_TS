type IDType = number | string;

// 判断number 是否继承 extends IDType

type ResType = number extends IDType ? true : false;

// 举个例子

function sums<T extends number | string>(num1: T, num2: T): T extends number ? number : string;

function sums(num1, num2) {
  return num1 + num2;
}
const res = sums(10, 20);
const res2 = sums("10", "20");

export {};
