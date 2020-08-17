# 6.Iterable-object(可迭代对象)

## 1.可迭代对象

```js
let range = {
  from: 1,
  to: 5
};
```

需求：让 range 对象可迭代，即可使用 for...of 循环遍历
方案：为对象添加名为 Symbol.iterator 的方法
方案要点：

- 执行 for...of 就会调用 Symbol.iterator 方法
- Symbol.iterator 方法返回一个迭代器（iterator），这个迭代器是一个有 next 方法的对象
- next 方法返回的结果格式是 { done: Boolean, value: any }，当 done 为 true 时，表示迭代结束，否则 value 是下一个值

```js
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
```

## 2.字符串的可迭代性

```js
let str = 'hello';
for (let s of str) {
  console.log(s);
}
```

## 3.可迭代（iterable）和 类数组（array-like）区别

- iterable 是实现了 Symbol.iterable 方法的对象，可使用 for...of 迭代
- array-like 是有索引和 length 属性的对象

```js
let objArray = {
  0: 'jxl',
  1: 18,
  length: 2
};

for (let info of objArray) {}  // Error: objArray is not iterable
```

可迭代对象和类数组都没有数组的 push 和 pop 等方法，要想使用，可使用 Array.from 将其转为数组

```js
let arr = Array.from(objArray);
console.log(arr);  // [ 'jxl', 18 ]
```

`Array.from` 还可以接收第二个参数函数，可将对象里的元素被添加到数组前，应用到每个元素：

```js
let arr = Array.from(objArray, item => item + 2);
console.log(arr);  // [ 'jxl2', 20 ]
```
