
/* 可迭代对象 */
let range = {
  from: 1,
  to: 5
};

// range 对象 Symbol.iterator 方法实现：
range[Symbol.iterator] = function() {
  // 返回一个 iterator 对象
  return {
    current: this.from,    // 这里需要将 this.form 和 this.to 保存下来
    last: this.to,
    
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true }
      }
    }
  }
}

for (let num of range) {
  console.log(num);   // 1 -> 2 -> 3 -> 4 -> 5
}

/* 字符串的可迭代 */
let str = 'hello';
for (let s of str) {
  console.log(s);
}

// 显示调用字符串的迭代方法
let iter = str[Symbol.iterator]();
while (true) {
  let r = iter.next();
  if (r.done) break;
  console.log(r.value);
}


/* Array.from */
let objArray = {
  0: 'jxl',
  1: 18,
  length: 2
};
let arr = Array.from(objArray);
console.log(arr);  // [ 'jxl', 18 ]

let arr1 = Array.from(objArray, item => item + 2);  
console.log(arr1);  // [ 'jxl2', 20 ]
