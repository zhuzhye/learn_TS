function foo(arg: number): number {
  return 123;
}

// foo本身也是一个标识符，也应该有自己的类型

const bar = (arg: number): number => {
  return 123;
};

function delayExeFn(fn) {}
