// 定义一个Ts中的函数时，都要明确指定参数的类型
// 返回值类型可以明确的指定，也可以自动进行类型推导
function sum(num1: number, num2: number): number {
  return num1 + num2;
}

sum(1, 2);
