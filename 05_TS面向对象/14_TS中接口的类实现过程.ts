interface IKun {
  name: string;
  age: number;
  slgion: string;
  playBasketBall: () => void;
}

interface IRun {
  running: () => void;
}
const ikun: IKun = {
  name: "zz",
  age: 19,
  slgion: "你干嘛",
  playBasketBall() {
    return 123;
  },
};

console.log(ikun);
// 作用：接口被类实现
class Person implements IKun, IRun {
  name: string;
  age: number;
  slgion: string;
  playBasketBall: () => {};
  running: () => {};
}

const ikun2 = new Person();
ikun2.age;
export {};
