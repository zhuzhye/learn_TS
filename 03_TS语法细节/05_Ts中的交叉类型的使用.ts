// 回顾：联合类型
type idType = number | string;

const id1: idType = 123;
const id2: idType = "abc";

// 交叉类型：
type newType = number & string; //没有意义

interface IKun {
  name: string;
  age: string;
}

interface ICoder {
  name: string;
  coding: () => void;
}

const info: IKun & ICoder = {
  name: "kun",
  age: "18",
  coding: () => {},
};

export {};
