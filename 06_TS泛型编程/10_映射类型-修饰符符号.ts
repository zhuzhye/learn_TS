type MapIPerson<T> = {
  -readonly [index in keyof T]-?: T[index];
};

interface IPerson {
  name: string;
  age?: number;
  readonly height: number;
  address?: string;
}

type IPersonOptionl = MapIPerson<IPerson>;

const p: IPersonOptionl = {
  name: "zzy",
  age: 11,
  height: 1.8,
  address: "11",
};

export {};
