class Person {
  constructor(public name: string, public age: number, public height: number) {
    this.age = age;
    this.height = height;
  }
}
const p = new Person("zzy", 18, 111);
console.log(p.name);
export {};
