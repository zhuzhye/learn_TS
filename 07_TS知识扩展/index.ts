import { price, date } from "./utils/format";
import { sum } from "./utils/math";
// import { type IDtype, type IPerson } from "./utils/type";
console.log(sum(1, 2));

const id1: IDtype = 1;
const foo: IPerson = {
  name: "zzy",
  age: 11,
};

// 使用命名空间中的内容
price.format(1);
date.format("2021-01-01");

document;
