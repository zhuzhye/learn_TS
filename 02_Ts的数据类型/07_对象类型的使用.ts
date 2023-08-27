const info: {
  name: string;
  age: number;
} = {
  name: "zzy",
  age: 17,
};

// 2.对象类型和函数类型结合使用
type pointType = {
  x: number;
  y: number;
  z?: number;
};
function printCoordinate(point: pointType) {
  console.log("x坐标", point.x);
  console.log("y坐标", point.y);
}

// printCoordinate(123);
printCoordinate({ x: 100, y: 100, z: 100 });
export {};
