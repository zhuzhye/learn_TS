// 1.字面量类型的基本使用
const name = "why";
let age: 10 = 10;

// 2.将多个字面量类型联合起来
type Direction = "left" | "right" | "up" | "down";

const d1: Direction = "left";

// 例子：封装请求方法
type Methods = "get" | "post" | "put" | "delete";
function request(url: string, methods: Methods) {}

request("http://www.baidu.com", "get");

// TS细节
const info = {
  url: "xxx",
  mehthod: "post",
};
// 下面的做法是错误,info.method获取的是string类型
// request(info.url, info.mehthod);

// 解决方案一：info.method进行类型断言
request(info.url, info.mehthod as "post");
// 解决方案二:
// const info2: { url: string; mehthod: "post" } = {
//   url: "xxx",
//   mehthod: "post",
// };
const info2 = {
  url: "xxx",
  mehthod: "post",
} as const;
request(info2.url, info2.mehthod);
export {};
