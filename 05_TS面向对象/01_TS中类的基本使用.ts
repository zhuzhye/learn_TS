class Person {
  // 成员属性：声明成员属性
  name!: string;
  age: number = 0;
  constructor(name: string, age: number) {
    // this.name = name;
    this.age = age;
  }
  eating() {
    console.log(this.name);
  }
  runing() {
    console.log(this.age);
  }
}

// 实例对象：instance
const p1 = new Person("123", 18);
const p2 = new Person("xxx", 18);
export {};
