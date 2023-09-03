// 映射类型不能使用interface定义
type MapPerson<T> = {
  [property in keyof T]?: T[property];
};

interface IPerson {
  name: string;
  age: number;
  x: () => void;
}

type NewPeron = MapPerson<IPerson>;
export {};
