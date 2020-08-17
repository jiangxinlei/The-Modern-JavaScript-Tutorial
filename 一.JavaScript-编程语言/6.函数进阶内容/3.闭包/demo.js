function getCount() {
  let count = 0;

  return function() {
    return count++;
  }
}

const counter = getCount();
console.log(counter());   // 0
console.log(counter());   // 1
console.log(counter());   // 2
