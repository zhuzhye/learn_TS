// 1.理解一下形参和实例参数话，但是参数的类型是固定
// function foo(name, age) {}

// foo("zzy", 19);

// 2.定义函数：将传入的内容返回
function bar<Type>(arg: Type): Type {
  return arg;
}
// 2.1完整的写法
const res1 = bar<number>(123);
const res2 = bar<string>("123");
const res3 = bar<{ name: string }>({ name: "wy" });

// 2.2省略的写法

const res4 = bar("aaaaaa");
let res5 = bar(1111);
const message = "Hello World";
