// 在TS中如果一个函数没有任何返回值，那么返回值类型是viod类型
// 如果返回值是viod类型，那么也可以返回undefined (ts编译器允许这样做而已)
function sum(num1: number, num2: number) {
  //   return num1 + num2;
  console.log(num1 + num2);
}

// 应用场景 用来指定函数类型返回值viod
type LyricInfoType = { time: number; text: string } | number;
function parseLyric(lyric: string): LyricInfoType[] {
  let lyricInfos: LyricInfoType[] = [];
  lyricInfos.push(123);
  return lyricInfos;
}

type fooType = () => void;
const foo: fooType = () => {};

// 举个例子
type ExecFnType = (...args: any[]) => void;
function delayExecFn(fn: ExecFnType) {
  fn(123);
}
delayExecFn((age, name) => {
  console.log(age, name);
});
export {};
