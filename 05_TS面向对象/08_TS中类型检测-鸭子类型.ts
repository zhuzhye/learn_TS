// typescript对类型检测使用的是鸭子类型
// 鸭子类型，只关系属性和行为，不关心具体是不是对应类型
class Person {
  constructor(public name: string, public age: number) {}
}
class Dog {
  constructor(public name: string, public age: number) {}
}
function printPerson(p: Person) {
  console.log(p.name, p.age);
}
printPerson(new Person("zza", 123));
// printPerson("123");
printPerson({ name: "2", age: 123 });
printPerson(new Dog("123", 89));

const person: Person = new Dog("123", 14);
export {};
