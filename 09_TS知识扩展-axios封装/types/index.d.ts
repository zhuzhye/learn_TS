declare module "lodash" {
  export function join(...args: any[]): any;
}

// 为自己的变量定义类型声明

declare let zzyName: string;
declare let zzyAge: number;
declare let zzyHeight: number;

declare function foo(bar: string): string;

declare class Person {
  name: string;
  age: number;
  constructor(name: string, age: number);
}

// 声明文件模块

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";

declare module "*.vue";

declare namespace $ {
  export function ajax(settings: any): any;
}
