class Person {
  name: string;
  readonly age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p = new Person("zzy", 19);
p.name = "33";
console.log(p.age);
export {};
