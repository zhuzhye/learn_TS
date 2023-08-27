// type idType = {
//   name: string;
// };
// let id: number | idType | string = "aaa";

// id = 123;

// id = { name: "why" };

// 1.any类型表示不限制标识符的任意类型，并且可以在该标识符上面进行任意的操作（在typescript中回到javascript）
let id: any = "aaa";

id = 123;
id = { name: "why" };

// 定义数组

const infos: (string | number)[] = ["absc", 123];
