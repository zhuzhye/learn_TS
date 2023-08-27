// 1.联合类型基本使用
let foo: number | string = "123";

// foo = 123;

// 使用的时候要特别小心

if (typeof foo === "string") {
  console.log(foo.length);
}

// 2.举个例子：打印id

function printID(id: number | string) {
  //  类型缩小
  if (typeof id === "string") {
  } else {
  }
  console.log(id);
}

printID(123);
printID("abc");
export {};
