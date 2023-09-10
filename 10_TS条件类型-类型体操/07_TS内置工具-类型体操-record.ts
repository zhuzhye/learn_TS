interface IKUN {
  name: string;
  age: number;
  slogan: string;
}

// 类型体操
// 确保kes一定是可以作为key的联合类型
type MRecord<Keys extends keyof any, T> = {
  [p in Keys]?: T;
};
// 所有属性都变成可选
type t1 = "上海" | "北京" | "深圳";
type IKUNS = MRecord<t1, IKUN>;

const ikuns: IKUNS = {
  上海: {
    name: "上海",
    age: 18,
    slogan: "上海",
  },
};

console.log(ikuns);
export {};
