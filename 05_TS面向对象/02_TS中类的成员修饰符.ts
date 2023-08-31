class Person {
  public name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // 方法变成私有方法
  private eating() {
    console.log("吃东西");
  }
}
// public 修饰的是在任何地方可见，公有的属性或方法，默认编写的属性就是public
// private修饰的是在同一类可见、私有的属性或方法
// protected修饰的是仅在类自身或子类可见，受保护的属性和方法

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }
  studying() {
    console.log(this.age);
  }
}
const p = new Person("zzy", 19);
const student = new Student("zzy", 19).studying();
