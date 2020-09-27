// let buffer = new ArrayBuffer(16);     // 创建一个长度为 16 的 buffer
// console.log(buffer);
// console.log(buffer.byteLength);

// let view = new Uint32Array(buffer);   // 将 buffer 视为一个 32 位整数的序列
// console.log(view);

// console.log(Uint32Array.BYTES_PER_ELEMENT);  // 4，每个整数 4 个字节
// console.log(view.length);     // 4，存储了 4 个整数
// console.log(view.byteLength); // 16，字节中的大小

// // view[0] = 123456;     // 写入一个值

// for (let num of view) {
//   console.log(num);
// }


// let arr = new Uint8Array([0, 1, 2, 3]);
// console.log(arr.length);
// console.log(arr[2]);

// let uint8array = new Uint8Array(16);
// uint8array[0] = 256;
// uint8array[1] = 257;
// console.log(uint8array)

// let uint16array = new Uint16Array(buffer);
// console.log(uint16array);

// console.log('================================================================');


// // 4 个字节的二进制数组，每个都是最大值 255
// let buff = new Uint16Array([255, 255, 255, 255]).buffer;
// let bufferView = new DataView(buff);
// console.log(bufferView);

// // 在偏移量为 0 处获取 8 位数字
// console.log(bufferView.getUint8(0));   // 255

// // 在偏移量为 0 处获取 16 位数字，由 2 个字节组成，一起解析为 65535
// console.log(bufferView.getUint16(0));   // 65535（最大的 16 位无符号整数）

// // 在偏移量为 0 处获取 32 位数字
// console.log(bufferView.getUint32(0));   // 4294967295（最大的 32 位无符号整数）

// bufferView.setUint32(0, 0);         // 将 4 个字节的数字设为 0 ，即将所有字节都设为 0
// console.log(bufferView);


let buffer8 = new ArrayBuffer(12);
let view8 = new Uint8Array(buffer8);
console.log('view8: ', view8);
console.log('view8: ', view8.length);
console.log('view8: ', view8.byteLength);

let buffer16 = new ArrayBuffer(16);
let view16 = new Uint16Array(buffer16);
let view18 = new Int8Array([2, 3, 4])

console.log('view18: ', view18);
view18[0] = 6;
console.log('view18: ', view18);
console.log('view16: ', view16);
console.log('view16: ', view16.length);
console.log('view16: ', view16.byteLength);

let buffer32 = new ArrayBuffer(32);
let view32 = new Uint32Array(buffer32);
console.log('view32: ', view32);
console.log('view32: ', view32.length);
console.log('view32: ', view32.byteLength);

const dataView = new DataView(buffer32);
console.log(buffer32);

console.log(Uint8Array.BYTES_PER_ELEMENT);
console.log(Uint16Array.BYTES_PER_ELEMENT);
console.log(Uint32Array.BYTES_PER_ELEMENT);