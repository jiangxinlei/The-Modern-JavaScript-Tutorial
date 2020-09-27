
// TextDecoder 在给定 buffer 和编码格式 encoding 情况下，能够将值读取到实际的 JS 字符串中
let uint8array = new Uint8Array([72, 101, 108, 108, 111]);
console.log(new TextDecoder().decode(uint8array));

let uint8array1 = new  Uint8Array([228, 189, 160, 229, 165, 189]);
console.log(new TextDecoder().decode(uint8array1));

// 截取
let uint8arrayNew = new Uint8Array([0, 72, 101, 108, 108, 111, 0]);
let binStr = uint8arrayNew.subarray(1, -1);

console.log(new TextDecoder().decode(binStr));


// TextEncoder 将字符串转为字节

let encoder = new TextEncoder();
const str = encoder.encode('Hello');
console.log(str);
