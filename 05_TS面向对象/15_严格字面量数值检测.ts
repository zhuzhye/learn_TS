interface IPerson {
  name: string;
  age: number;
}

// 1.奇怪的现象一：
// 定义info 类型时IPerson类型
const obj = {
  name: "zyz",
  age: 19,
  height: 1.0,
};
const info: IPerson = obj;

// 2.奇怪的现象二
function printPerson(person: IPerson) {}
const kobe = { name: "zz", age: 18, height: 1.11 };
printPerson(kobe);

// 第一次创建的对象字面量，称之为fresh（新鲜的）
// 对于新鲜的字面量，会进行严格的类型检测，必须完全满足类型的要求(不能有多余的属性)

const p: IPerson = {
  name: "zyz",
  age: 19,
};
export {};
