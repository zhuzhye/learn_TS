interface IKun {
  name: string;
  age: number;
}
type IKunKyes = keyof IKun; // "name|age"

function getObjectProperty<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}
const info = {
  name: "zzy",
  age: 18,
  height: 1.999,
};

const name = getObjectProperty(info, "name");
export {};
