// 定义对象类型
type IPerson = {
  // 属性?：可选属性
  name: string;
  // readyonly：只读属性
  age: number;
};

interface Ikun {
  name?: string;
  readonly slogin: string;
}

const p: IPerson = {
  name: "zzy",
  age: 19,
};
