
/**
 * 对数字求和到给定值
 *
 * @param {*} n
 * @returns
 */
function sumToFor(n) {
  let r = 0
  for (let i = 1; i <= n; i++) {
    r += i;
  }
  return r;
}
console.log(sumToFor(100));

function sumToRecursion(n, x = 0) {
  if (n === 0) return x;
  return sumToRecursion(n - 1, x + n);
}
console.log(sumToRecursion(100));

function sumTo(n) {
  return n * (n + 1) / 2;
}
console.log(sumTo(100));

/**
 * 阶乘
 *
 * @param {*} n
 * @param {number} [x=1]
 * @returns
 */
function factorial(n, x = 1) {
  if (n === 0) return x;
  return factorial(n - 1, x * n);
}
console.log(factorial(5));


/**
 * 斐波那契数列
 *
 * @param {*} n
 * @param {number} [a=1]
 * @param {number} [b=1]
 * @returns
 */
function fib(n, a = 1, b = 1) {
  if (n <= 1) return b;

  return fib(n - 1, b, a + b)
}
console.log(fib(7));


/**
 * 输出单链表
 *
 * @param {*} list
 * @returns
 */
function printList(list) {
  let arr = [];
  let l = list;
  while (l) {
    arr.push(l.value);
    l = l.next;
  }

  return arr;
}
let lists = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
console.log(printList(lists));

function printListRecursion(list) {
  if (!list.next) return list.value;

  return printListRecursion(list.next);
}
console.log(printListRecursion(lists));


console.log(globalThis);