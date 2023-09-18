interface IKUN {
  name: string;
  age: number;
  slogan: string;
}

type MPick<T, K extends keyof T> = {
  [p in K]: T[p];
};

type IKuns = Pick<IKUN, "name" | "age">;
type IKunPick = MPick<IKUN, "name" | "age">;

export {};
