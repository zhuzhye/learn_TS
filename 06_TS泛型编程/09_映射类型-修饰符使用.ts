type MapIPerson<T> = {
  [index in keyof T]?: T[index];
};

interface IPerson {
  name: string;
  age: number;
  height: number;
  address: string;
}

type IPersonOptionl = MapIPerson<IPerson>;

const p: IPersonOptionl = {};

export {};
