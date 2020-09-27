
// Blob

// new Blob 第一个 参数必须是一个数组
let buffer = new Uint8Array([72, 72, 101, 108, 108, 111]);
let blob = new Blob([buffer, ' ', 'world'], { type: 'text/plain' });
console.log(blob);

link.href = URL.createObjectURL(blob);
// link.click();
URL.revokeObjectURL(link.href);


let txt = document.createElement('a');
txt.download = 'hello.txt';
let txtBlob = new Blob(['hello jxl'], { type: 'text/plain' });

let reader = new FileReader();
reader.readAsDataURL(txtBlob);   // 将 blob 转换为 base64 并调用 onload
reader.onload = function() {
  link.href = reader.result;
  // link.click();
}


// image 转换为 Blob
let img = document.querySelector('img');

let canvas = document.createElement('canvas');
canvas.width = img.clientWidth;
canvas.height = img.clientHeight;

let ctx = canvas.getContext('2d');

ctx.drawImage(img, 0, 0);

canvas.toBlob(function (blob) {
  let linkImg = document.createElement('a');
  linkImg.download = 'jxl.png';

  linkImg.href = URL.createObjectURL(blob);
  // linkImg.click();

  URL.revokeObjectURL(linkImg.href);
}, 'image/png')
