// 函数属性 name
function fn() {

}
console.log(fn.name);

let func = function(a, b) {

}
console.log(func.name);


function f (sayHi = function(){}) {
  console.log(sayHi.name);
}
f();



// 函数属性 length，形参数量
console.log(fn.length);     // 0
console.log(func.length);   // 2



// 自定义属性
function say() {
  say.counter++;
}
say.counter = 0;
say();
say();

console.log(`called ${ say.counter } times`);   // 2

// 自定义属性在闭包中定义，在外面是可以访问的
function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();

counter.count = 10;
console.log( counter() ); // 10



// 命名函数表达式

/* 
  这种就是命名了 sayHello 的函数表达式
  特点：
  - 它允许在函数内部调用自己
  - 函数外部不可见，无法调用
  - 不影响函数表达式调用
*/
let hello = function sayHello(name) {
  console.log(name);
}
hello('jxl');   // jxl


/* 
  调用 he() 后， name 没传值，走到 else 调用 sayHello()
  赋值后调用 if 里打印了
*/
let he = function sayHello(name) {
  if (name) {
    console.log(`hello ${name}`);   // hello jxl
  } else {
    sayHello('jxl')
  }
}
he();
