// 1.普通的实现
// function getLength(arg) {
//   return arg.length;
// }

// 2.函数的重载
// function getLength(arg: string): number;
// function getLength(arg: string[]): number;
// function getLength(args) {
//   return args.length;
// }

// 3.联合类型实现(可以使用联合类型的实现，尽量使用联合类型)
// function getLength(arg: string | any[]) {
//   return arg.length;
// }

// 3.对象类型
function getLength(args: { length: number }) {
  return args.length;
}
getLength("aaaa");
getLength(["as", "ss", "ss"]);

export {};
