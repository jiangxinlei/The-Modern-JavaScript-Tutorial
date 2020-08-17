
/**
 * 为 counter 添加 set 和 decrease 方法
 *
 * @returns
 */
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = function(val) {
    count = val;
  }

  counter.decrease = function() {
    count--;
  }

  return counter;
}

let counter = makeCounter();
console.log(counter());
counter.set(3)
console.log(counter());
counter.decrease()
console.log(counter());



function sum(a) {
  let cur = a;

  function f(val) {
    cur += val;
    return f;
  }

  f.toString = function() {
    return cur;
  }

  return f;
}

console.log(sum(1));
console.log(sum(1)(2));
console.log(sum(1)(2)(3));