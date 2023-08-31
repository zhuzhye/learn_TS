interface IIndexType {
  // 返回值类型的目的是告知通过索引获取到的值是什么类型
  //   [index: number]: string;
  [index: string]: any;
}

const names: IIndexType = ["abc", "ss", "nba"];
// 索引签名：  [index: string]: any;没有报错
// 1.索引要求必须是字符串类型 names[0]=>names["0"]

// 2.索引签名[index: string]: any;会报错
// 严格的字面赋值检测["abc", "ss", "nba"] => Array实例 => names[0] names.forEach
// names['forEach']=>function
// names['map/filter']=>function
export {};
