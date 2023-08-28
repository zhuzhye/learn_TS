// 类型别名 type
type MyNumber = number;
const age: MyNumber = 18;

type IDType = string | number;
function printID(id: IDType) {
  console.log(id);
}

// 打印坐标
type PointType = { x: number; y: number; z?: number };
function printCoordinate(point: PointType) {
  console.log(point.x, point.y);
}

export {};
