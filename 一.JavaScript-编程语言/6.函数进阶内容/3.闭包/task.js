"use strick";

let name = 'jxl';
function say() {
  console.log(name);
}
name = 'shq';
say();


function makeWorker() {
  let na = 'jxl';

  return function() {
    console.log(na);
  }
}
let na = 'shq';
let work = makeWorker();
work();


function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}
let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter());
console.log(counter());

console.log(counter2());
console.log(counter2());


function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let count = new Counter();
console.log(count.up());
console.log(count.up());
console.log(count.down());


let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}
sayHi();


function sum(a) {

  return function (b) {
    return a + b;
  }
}
console.log(sum(1)(-1));


let x = 1;
function func() {

  let x = 2;
}

func();



function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) );


function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  }
}
console.log(arr.filter(inArray([1, 2, 10])));


function byField(field) {
  return function(a, b) {
    return a[field] > b[field] ? 1 : -1;
  }
}
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
console.log(users.sort(byField('name')));