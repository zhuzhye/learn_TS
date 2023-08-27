// 明确指定<数组>的类型注解两种写法
// 1.string[],数组类型，并且数组中存放字符串类型
// 2.Array<泛型> Array<string> 数组类型，并且数组中存放字符串类型

// 注意事项，在真实的开发中，数组中一般存放同一类型的数据，不要存放多种类型的数据

let names: string[] = ["abc", "cba", "nba"];
names.push("mba");
let nums: Array<string> = ["123", "456", "789"];
// names.push(123);
