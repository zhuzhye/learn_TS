interface IKUN {
  name: string;
  age: number;
  slogan: string;
}

// 类型体操
type ZPartial<T> = {
  [p in keyof T]?: T[p];
};

// 所有属性都变成可选
type Ikunoptional = ZPartial<IKUN>;

export {};
