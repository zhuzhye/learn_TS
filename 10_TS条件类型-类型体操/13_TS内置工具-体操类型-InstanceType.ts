class Person {}

const p1: Person = new Person();

// 类型体操

type MInstanceType<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer R ? R : never;
// typeof Person ：构造函数具体的类型
// InstanceType<typeof Person>：构造函数的实例对象类型
type MPerson = InstanceType<typeof Person>;
const p2 = new Person();

// 构造函数的例子
// 通用的创建实例的工具函数时
function factory<T extends new (...args: any[]) => any>(ctor: T): InstanceType<T> {
  return new ctor();
}
// 通用的创建实例的工具函数时
function factory2<T extends new (...args: any[]) => any>(ctor: T): MInstanceType<T> {
  return new ctor();
}

const p3 = factory(Person);
