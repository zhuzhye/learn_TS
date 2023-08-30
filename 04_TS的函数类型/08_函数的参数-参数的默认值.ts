// 函数的参数可以有默认值
// 1.有默认值的情况下，参数类型注解可以省略
// 2.有默认值得参数是可以接受undefined得值
function foo(x: number, y: number = 100) {}

foo(10, undefined);
// foo(10);

export {};
