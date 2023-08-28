// 定义接口
interface IPerson {
  name: string;
  age: number;
  friend?: {
    name: string;
  };
}

const info: IPerson = {
  name: "kun",
  age: 18,
};
// 可选链:.?
console.log(info.friend?.name);

// 属性赋值
// 解决方案一：类型缩小
if (info.friend) {
  info.friend.name = "zzy";
}

// 解决方案二:非空类型断言(有点危险,只有确保friend一定有值的情况)
info.friend!.name = "zzy";
