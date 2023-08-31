class Person {}

/**
 * 类的作用
 * 1.可以创建类对应的实例对象
 * 2.类本身可以作为实例的类型
 * 3.类可以当做一个又构造签名的函数
 **/
const p: Person = {};
function printPerson(p: Person) {}
function factory(ctor: new () => void) {}
factory(Person);
export {};
