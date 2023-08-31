interface IPerson {
  name: string;
  age: number;
}
// 可以从其他接口中继承过来属性
// 1.减少了相同代码的重复编写
// 2.如果使用第三方库，给我定义了一些属性，自定一个接口，同时你希望自定接口拥有第三方库中某一个类型中所有属性
interface ILim extends IPerson {
  slogin: string;
}

const ikun: ILim = {
  name: "zz",
  age: 18,
  slogin: "nizy",
};

export {};
