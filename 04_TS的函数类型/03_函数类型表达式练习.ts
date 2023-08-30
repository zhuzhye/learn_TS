type calcType = (num1: number, num2: number) => number;
function calc(calcFn: calcType) {}

function sum(num1: number, num2: number) {
  return num1 + num2;
}
calc(sum);
export {};
