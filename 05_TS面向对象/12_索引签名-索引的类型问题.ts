interface IIndexType {
  [aaa: number]: any;
  [bbb: string]: any;
}
const nums: IIndexType = ["as", "cc", "sss"];
// 通过数字类型去访问索引时，最终是转化为string类型访问
const info: IIndexType = { name: "zzy", age: 19 };
console.log(info["name"]);
