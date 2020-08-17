/**
 * 高阶函数
 *
 * @returns
 */
function compose() {
  let arr = [...arguments];
  // let arr = Array.from(arguments);

  return function (n) {
    return arr.reduce((init, cur) => init + cur(n), n)
  }
}
function log(n){
  return n+1
}
function vis(n){
  return n+2
}
function style(n){
  return n+3
}
const func = compose(log, vis, style);
console.log(func(1));

/**
 * 合并无序数组，返回合并后的数组的元素按升序进行排序
 *
 * @returns
 */
function merge() {
  let arr = [...arguments].reduce((initArr, curArr) => initArr.concat(curArr), [])

  // let arr = [...arguments].flat();   // 更简单
  
  return arr.sort((a, b) => a - b);
}
let mArr1 = [1, 3, 2], mArr2 = [6, 5, 4], mArr3 = [3, 9, 7];
console.log(merge(mArr1, mArr2, mArr3));

/**
 * 删除所有短横线，并将短横线后的每一个单词的首字母变为大写
 * 如：border-left-width 转换成 borderLeftWidth
 * @param {*} str
 */
function camelize(str) {
  if (!str) return '';

  let strs = str.split('-');
  return strs.reduce((init, cur, index) => {
    return init + (index ? cur[0].toUpperCase() + cur.slice(1) : cur)
  }, '')
}
console.log(camelize("background-color"));

/**
 * 过滤范围
 * 查找数值大小在 a 和 b 之间的元素，并返回它们的数组，返回的是新数组，不影响 arr
 * @param {*} arr
 * @param {*} a
 * @param {*} b
 * @returns
 */
function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}
let fArr = [5, 3, 7, 2];
filterRange(fArr, 1, 4);

function Calculator() {
  this.methods = {
    '-': (a, b) => a - b, 
    '+': (a, b) => a + b, 
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  }

  this.calculator = function (str) {

  }
}


/**
 * 洗牌算法
 *
 */
function shuffle(arr) {
  let arrLen = arr.length;
  for (let i = arrLen - 1; i >= 0; i--) {
    let index = Math.ceil(Math.random() * i);
    [arr[index], arr[i]] = [arr[i] = arr[index]];
  }

  return arr;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

/**
 * 获取平均年龄
 *
 */
function getAverageAge() {
  let arr = [...arguments];

  arr.reduce((init, cur) => init + cur.age, 0) / arr.length
}
getAverageAge(john, pete, mary);


let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function getUsersById() {
  return users.reduce((init, cur) => {
    init[cur.id] = cur;
    return init;
  }, {});
}
console.log(getUsersById(users));