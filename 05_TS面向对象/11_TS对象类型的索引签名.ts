interface ICollection {
  // 索引签名
  [index: string]: number;
  length: number;
}

const names: number[] = [111, 222, 333];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

function interatorCollection(collection: ICollection) {}
// interatorCollection(names);
// const tuple: [string, string] = ["zzy", "18"];
// interatorCollection(tuple);

interatorCollection({ name: 111, age: 18, length: 10 });
export {};
