interface IKUN<T = string> {
  name: T;
  age: Number;
  slogan: T;
}

const Kun: IKUN<string> = {
  name: "wy",
  age: 19,
  slogan: "zzz",
};

const Kun2: IKUN<number> = {
  name: 1,
  age: 19,
  slogan: 3,
};

const Kun3: IKUN = {
  name: "zx",
  age: 124,
  slogan: "加",
};
export {};
