type CalcFnType = (num1: number, num2: number) => number;

function foo() {
  return "abc";
}

// 类型体操题目：MyRetrunType
type MyRetrunType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never;
type MyParameterType<T extends (...args: any[]) => any> = T extends (...args: infer A) => any ? A : never;

// 获取一个函数的返回值类型

type CalcRetrunType = MyRetrunType<CalcFnType>;
type FooReturnType = MyRetrunType<typeof foo>;

type CalcParameterType = MyParameterType<CalcFnType>;
