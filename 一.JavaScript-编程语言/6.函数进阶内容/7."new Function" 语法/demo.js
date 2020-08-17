let func = new Function('a', 'b', 'return a + b');

console.log(func(1, 2));   // 3

let func1 = new Function('a, b', 'return a + b');
console.log(func1(1, 2));   // 3


let say = new Function('console.log("hello")');
say();


// 使用场景
// 比如需要从服务器获取代码或动态从模版编译函数时才会使用


// new Function 无法访问闭包的函数内部变量，只能访问全局变量
let name = 'jxl';

function getFunc() {
  let val = 'hello';

  let func = new Function('console.log(name);console.log(val);'); // 可以访问 name，但无法访问 val
  return func;
}
getFunc()();