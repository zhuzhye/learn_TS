// 定义枚举类型
enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

const d1: Direction = Direction.UP;

function trunDirection(direction: Direction) {
  switch (direction) {
    case Direction.UP:
      console.log("角色向上移动一个哥字");
      break;
    case Direction.LEFT:
      console.log("角色向左移动一个哥字");
      break;

    default:
      break;
  }
}

// 监听键盘的点击
trunDirection(Direction.LEFT);
export {};
