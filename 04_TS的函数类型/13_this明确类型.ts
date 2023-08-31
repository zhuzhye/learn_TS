// 在没对ts进行特殊配置的情况下，this是any类型
// 设置配置选项（编译选项compilerOptions，noImpliciThis设置true，不允许模糊this存在）
// 1.对象中的函数中的this
const obj = {
  name: "zy",
  study: function () {
    // 默认情况下，this是any类型
    console.log(this.name, "stduay");
  },
};
obj.study();
// 2.普通的函数
function foo(this: { name: string }, info: { name: string }) {
  console.log(this, info);
}
obj.study();
foo.call({ name: "x" }, { name: "s" });
// obj.study.call({});
export {};
