// 保存我的个人信息:zzy 123 1.11

// 1.使用数组
// 不合适：数组中最好保存相同的数据类型,获取值之后不能明确的知道对应的数据类型
const info1: any[] = ["zzy", 123, 1.11];

const value = info1[2];

// 2.使用对象类型

const info2 = {
  name: "zzy",
  age: 123,
  height: 1.11,
};

// 3.使用元组类型
// 元组数据结构中可以存放不同的数据类型，取出来的item也是有有明确的对应的类型
const info3: [string, number, number] = ["zzy", 123, 1.11];
const value2 = info3[2];

// 在函数中使用元组类型是最多的(函数的返回值)

function useState(initalState: any): [number, (newValue: number) => void] {
  let stateValue = initalState;
  function setValue(newValue: number) {
    stateValue = newValue;
  }
  return [stateValue, setValue];
}
const [count, setCount] = useState(10);
export {};

// 数组中通常建议存放相类型的元素，不同类型的元素是不推荐放在数组中
// 元组中每个元素都有自己特定的类型，根据索引值获取到的值可以确定对应的类型
