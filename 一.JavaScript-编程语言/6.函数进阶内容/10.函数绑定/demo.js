let user = {
  name: 'jxl',
  say() {
    console.log(`hello, ${this.name}`);   
  }
};

setTimeout(user.say, 1000);  // hello, undefined

let fn = user.say;
setTimeout(fn, 1000);   // hello, undefined

// setTimeout 将函数调用的 this 指向了 window

// 如何解决？

// 1、包装器
setTimeout(function() {
  user.say();
}, 1000);

// 或者
setTimeout(() => user.say(), 1000);

// 但是如果在调用函数期间改变了 user，这就需要将 this 值绑定不让他改变

// 2、使用 bind
let bindFn = user.say.bind(user);
setTimeout(bindFn, 1000);


user = {
  say() {
    console.log('改变了 user');
  }
}


// 偏函数
function add(a, b) {
  console.log(a + b);
}

let sum = add.bind(null, 2);
sum(3);
sum(4);
sum(5);