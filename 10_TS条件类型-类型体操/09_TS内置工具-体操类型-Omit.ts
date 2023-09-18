interface IKUN {
  name: string;
  age: number;
  slogan?: string;
}

type MOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type IKuns = Omit<IKUN, "name" | "age">;
type IKunPick = MOmit<IKUN, "name" | "age">;

export {};
