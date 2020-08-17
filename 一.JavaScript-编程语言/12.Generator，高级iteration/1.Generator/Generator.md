# Generator

常规函数只会返回一个单一值或不返回值；`Generator` 可按需一个个返回，与 `iterator` 完美配合。

## 一、Generator 函数

创建一个 `generator` 函数，需要用特殊语法结构：`function*`：

```js
function* generatorFn() {
  yield 1;
  yield 2;
  return 3;
}
```

`Generator` 函数和常规函数行为不同，它被调用时，不会运行其代码，而是返回 `generator object` 对象，来管理执行流程：

```js
const generator = generatorFn();
console.log(generator);   // Object [Generator] {}
```

一个 `generator` 对象的主要方法是 `next()`，每次调用 `next()` 就会执行最近 yield 语句，和 `iterator` 一样，`next()` 返回一个对象，值如下：

- value：yield 值
- done：`Generator` 函数执行完则为 true，否则为 false
  
```js
console.log(generator.next());  // { value: 1, done: false }
```

首次执行 `next()` 方法，当前值在第一个 `yield` 值，每次执行 `next()`，就会返回下一个 `yield` 值：

```js
console.log(generator.next());  // { value: 1, done: false }
console.log(generator.next());  // { value: 2, done: false }
console.log(generator.next());  // { value: 3, done: true }
```

直到 `done` 值为 true 后，`generator` 执行完成。

## 二、Generator 是可迭代的

`generator` 对象有 `next()` 方法，表明 `generator` 对象是可迭代的，可使用 `for...of` 循环遍历其所有值：

```js
function* generatorFn() {
  yield 1;
  yield 2;
  return 3;
}
const generator = generatorFn();

for (let val of generator) {
  console.log(val);  // 1 -> 2
}
```

这里不会打印 3 是因为当 `value` 为 3 时，`done` 是 `true`，`for...of` 会忽略掉，`for...of` 只会遍历 `yield` 的值，修改如下：

```js
function* generatorFn() {
  yield 1;
  yield 2;
  yield 3;
}
const generator = generatorFn();

for (let val of generator) {
  console.log(val);  // 1 -> 2 -> 3
}
```

`generator` 对象是可迭代的，那就可以使用 `iterator` 的所有相关功能，如扩展运算符（...）：

```js
const iter = [...generatorFn()];
console.log(iter);  // [ 1, 2, 3 ]
```

## 三、使用 generator 进行迭代

在 `iterable object` 中，对一个对象进行迭代，如下：

```js
let range = {
  from: 1,
  to: 5
};
```

现在可以通过提供一个 `generator` 函数作为 `Symbol.iterator`，使用 `generator` 进行迭代：

```js
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yeild value;
    }
  }
};
console.log([...range]);  // [ 1, 2, 3, 4, 5 ]
```

## 四、Generator 组合

`Generator` 组合是 generator 一个特殊功能，允许透明第将 `generator` 彼此 '嵌入' 到一起。例如：

```js
function* genFn(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
```

现在想用它生产一个更复杂的序列：

- 首先是数字 0-9（字符代码 48-57）
- 然后是大写字母 A-Z（字符代码 65-90）
- 接着是小写字母 a-z（字符代码 97-122）

可以对这个序列进行应用，例如从中选择字符创建密码。

使用 `generator` 实现：

```js
function* genFn(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* genCode() {
  // 0-9
  yield* genFn(48, 57);

  // A-Z
  yield* genFn(65, 90);

  // a-z
  yield* genFn(97, 122);
}

let str = '';
for (let code of genCode()) {
  str += String.fromCharCode(code);
}
console.log(str); // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
```

`yield*` 指令将执行 **委托** 给另一个 `generator`，意味着 `yield* gen` 在 `generator gen` 上进行迭代，并将其产出 (yield) 对值透明地转发给外部。

## 五、'yield' 是一条双向路

`yield` 是一条双向路：不仅可以向外返回结果，而且可以将外部的值传递给 generator 内。

调用 `generator.next(arg)` 可以将参数 `arg` 传递到 `generator` 内部，这个 `arg` 参数会变成 `yield` 的结果。

```js
function* gen() {
  // 向外部代码传递一个问题并等待答案
  let r = yield '2 + 2 = ?';
  console.log(r);
}

let gene = gen();

let ques = gene.next().value;  // yield 返回的 value
gene.next(4);   // 将结果传递到 generator 中
```

## 六、generator.throw

上面例子中，外部代码将一个值传给 `generator`，作为 `yield` 的值，当然也可以在那传递一个 `error`。

要向 `yield` 传递一个 `error`，应用调用 `generator.throw(err)`，`err` 将被抛到对应的 `yield` 所在那一行。

```js
function* genError() {
  try {
    let result = yield "2 + 2 = ?"; // (1)

    console.log('success');
  } catch(e) {
    console.log(e);  // error
  }
}

let generr = genError();
generr.next();
generr.throw(new Error('error'));  
```
