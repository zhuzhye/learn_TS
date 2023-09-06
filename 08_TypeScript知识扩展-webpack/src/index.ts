import axios from "axios";
import { AxiosRequestConfig, AxiosInstance } from "axios";
import React from "react";
import _ from "lodash";
import App from "./vue/App.vue";
import kobeImage from "../img/kobe02.png";
const message: string = "Hello World";
console.log(message);

// lib.dom.d.ts
const h2EL = document.createElement("h2");
h2EL.textContent = "Hello typescript";
document.body.appendChild(h2EL);

// lib.es2015.d.ts
const promise = new Promise((resolve, reject) => {});

// lodash
_.join(["a", "b", "c"], "***");

// 给自己的代码添加类型声明文件
// 平时使用的代码中用到的类型，直接在当前位置进行定义或者在业务文件夹某个位置编写一个类型文件即可

type IDtype = number | string;

interface IKun {
  name: string;
  age: number;
  slogin: string;
}
const id1: IDtype = 123;

// 需要编写类型声明
console.log(zzyName, zzyAge, zzyHeight);

console.log(foo("ss"));

console.log(new Person("2", 2));

// 作为第三方库为其他开发者提供类型声明文件 .d.ts=>axios.d.ts
const imgEl = document.createElement("img");
imgEl.src = kobeImage;
document.body.appendChild(imgEl);

$.ajax({
  url: "xx",
});
