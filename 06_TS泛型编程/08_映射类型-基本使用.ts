// 映射类型不能使用interface来定义
// Type=== IPerson
// keyof = name| age
type MapPerson<T> = {
  // [index:number]:any
  // 索引类型依次进行使用
  [property in keyof T]: T[property];
};

interface IPerson {
  name: string;
  age: number;
}
interface NewPerson {
  name: string;
  age: number;
}

export {};
