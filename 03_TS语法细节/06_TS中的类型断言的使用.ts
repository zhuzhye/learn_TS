// 获取dom元素
// 使用类型断言
const imgEle = document.querySelector(".img") as HTMLImageElement;

imgEle.src = "xxx";

// 类型断言的规则:断言只能断言城更加具体的类型，或者不太具体的类型
const age: number = 18;
// 错误的做法
// const age2 = age as string;

// TS类型检测来说是正确的，但是这个代码本身不太正确
const age3 = age as any;
const age4 = age3 as string;
