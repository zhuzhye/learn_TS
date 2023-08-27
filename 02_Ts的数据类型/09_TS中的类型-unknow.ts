// 2.unknown 是typescript中比较特殊的一种类型，它用于描述类型不确定的变量
// 和any类型有点类似，但是unknow类型的值上做任何事都是不合法的
// unknow类型默认情况下在上面进行任意操作都是非法的
// 要求必须进行类型的校验（缩小），才能根据缩小后的类型进行操作

let foo: unknown = "aaa";

foo = 123;

// 必须先判断类型，才能使用  类型缩小
if (typeof foo === "string") {
  console.log(foo.length);
}
// console.log(foo.length);  //不允许

export {};
