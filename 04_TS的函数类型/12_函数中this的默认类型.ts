// 在没对ts进行特殊配置的情况下，this是any类型
// 1.对象中的函数中的this
const obj = {
  name: "zy",
  study: function () {
    // 默认情况下，this是any类型
    console.log(this.name, "stduay");
  },
};
// 2.普通的函数
function foo() {
  console.log(this);
}
obj.study();
// obj.study.call({});
