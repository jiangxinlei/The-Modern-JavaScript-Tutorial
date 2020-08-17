// rest 参数

function sum(...args) {
  let s = 0;
  for (let arg of args) s += arg;
  console.log(s);

}
sum(1, 2, 3, 4, 5)

function sumAll(first, ...restArgs) {
  console.log(restArgs);
}
sumAll(1, 2, 3, 4, 5)


// 扩展运算符 ...

// 数组的可扩展
console.log(Math.max(...[1, 2, 3, 4]));
console.log(Math.max(...[1, 2, 3, 4], ...[8, 9, 7]));


// 字符串可扩展
console.log([...('hello')]);


// 获取一个 array/object 的副本
let arr = [23, 43, 6];
let arrCopy = [...arr];
console.log(arrCopy);
console.log(arr === arrCopy);   // false，两个数组的引用不同

arr.push(4);
console.log(arr);      // [ 23, 43, 6, 4 ]
console.log(arrCopy);  // [ 23, 43, 6 ]


let obj = { name: 'jxl', age: 18 };
let objCopy = { ...obj };
console.log(objCopy);
console.log(obj === objCopy);   // false

obj.name = 'shq';
console.log(obj);       // { name: 'shq', age: 18 }
console.log(objCopy);   // { name: 'jxl', age: 18 }