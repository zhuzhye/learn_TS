// 1.区别 type类型使用范围更广 ,接口类型只能用来声明对象
type MyNumber = number;
type IDType = number | string;

// 2.区别2，在声明对象时，interface可以多次声明
// 2.1 type不允许两个相同名称的别名同事存在
// type PointType1 = {
//   x: number;
//   y: number;
// };
// type PointType1 = {
//   z: number;
// };

// 2.2 interface可以多次声明，会自动合并

interface PointType2 {
  x: number;
  y: number;
}

interface PointType2 {
  z?: number;
}

const point: PointType2 = {
  x: 1,
  y: 2,
  z: 3,
};

// 3.interface支持继承

interface IPerson {
  name: string;
  age: number;
}

interface IStudent extends IPerson {
  kh: string;
}

const student: IStudent = {
  name: "jange",
  age: 18,
  kh: "123456",
};

// 4.interface 可以被类实现 TS面向对象

class Person implements IPerson {
  name: string;
  age: number;
}
// 总结：如果是非对象类型的定义使用type，如果是对象类型的声明那么使用interface

export {};
