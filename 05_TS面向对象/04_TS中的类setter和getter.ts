class Person {
  // 私有属性：属性前加下划线
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  // setter/getter
  set name(newValue: string) {
    this._name = newValue;
  }
  get name(): string {
    return this._name;
  }
}
const p = new Person("sty");
console.log(p.name);
p.name = "kobe";
export {};
