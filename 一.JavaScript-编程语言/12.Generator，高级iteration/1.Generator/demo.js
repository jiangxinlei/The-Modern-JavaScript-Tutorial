function* generatorFn() {
  yield 1;
  yield 2;
  yield 3;
}
const generator = generatorFn();
console.log(generator);
// console.log(generator.next());  // { value: 1, done: false }
// console.log(generator.next());  // { value: 2, done: false }
// console.log(generator.next());  // { value: 3, done: true }

for (let val of generator) {
  console.log(val);  // 1 -> 2
}

const iter = [...generatorFn()];
console.log(iter);


let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

console.log([...range]);   // [ 1, 2, 3, 4, 5 ]

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
console.log(str);

function* gen() {
  let r = yield '2 + 2 = ?';
  console.log(r);
}

let gene = gen();

gene.next();
gene.next(4);


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


function* pseudoRandom(seed) {
  let value = seed;

  while (true) {
    value = value * 16807 & 2147483647;
    yield value;
  }
}
let seed = pseudoRandom(1);
console.log(seed.next().value);
console.log(seed.next().value);
console.log(seed.next().value);