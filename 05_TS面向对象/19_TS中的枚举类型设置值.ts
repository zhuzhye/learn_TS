// 定义枚举类型
// enum Direction {
//   UP = 100,
//   DOWN,
//   LEFT,
//   RIGHT,
// }

enum Direction {
  LEFT = "LEFT",
  UP = "UP",
  RIGHT = "RIGHT",
}

enum OperAtion {
  Read = 1 << 0,
  Write = 1 << 1,
  foo = 1 << 2,
}
const d1: Direction = Direction.UP;

export {};
