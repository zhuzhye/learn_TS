abstract class Shape {
  // getArea方法只有声明没有实现体
  // 实现让子类自己实现
  // 可以让getArea方法定义为抽象方法
  abstract getArea();
}

class RectgAngle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  getArea() {
    return this.width + this.height;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}

class Triangle extends Shape {
  getArea() {
    return 100;
  }
}
function getArea(shape: Shape) {}
getArea(new RectgAngle(10, 20));
getArea(new Circle(5));
getArea({ getArea: function () {} });
// 抽象类不能被实例化
// getArea(new Shape());
export {};
