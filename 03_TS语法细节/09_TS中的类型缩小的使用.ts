// 1.typeof:使用的最多
function printID(id: number | string) {
  if (typeof id === "string") {
    console.log(id.length, id.toUpperCase());
  } else {
    console.log(id);
  }
}

// 2.方向的类型判断
type Direction = "left" | "right" | "up" | "down";
function switchDirection(direction: Direction) {
  if (direction === "left") {
    console.log("左");
  } else if (direction === "right") {
    console.log("右");
  } else if (direction === "up") {
    console.log("上");
  } else {
    console.log("下");
  }
}

// 3.传入一个日期，打印日期
function printDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date, "date");
  } else {
    console.log(date, "string");
  }
}

// 4.判断是否有某一个属性
interface ISwim {
  swim: () => void;
}

interface Irun {
  run: () => void;
}

function move(animal: ISwim | Irun) {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.run();
  }
}

const fish: ISwim = {
  swim: () => {},
};

const dog: Irun = {
  run: () => {},
};
move(fish);
move(dog);
export {};
