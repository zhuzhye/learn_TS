interface IPerson {
  name: string;
  age: number;
  height: number;
}

const p: IPerson = {
  name: "zzy",
  age: 18,
  height: 1.88,
};

// 1.索引签名理解
interface infoType {
  // 索引签名：可以通过字符串索引，去获取一个值，也是字符串
  [key: string]: string;
}
function getInfo(): infoType {
  const abc: any = "hhh";
  return abc;
}

const info = getInfo();

interface ICollection {
  [index: number]: string;
  length: number;
}
// 2.索引签名的案例
function printCollection(collection: ICollection) {}

const array = ["abc", "cba", "nba"];
const tuple: [string, string] = ["zzt", "广州"];
printCollection(array);
printCollection(tuple);
export {};
