
// switch (document.readyState) {
//   case 'loading':
//     console.log('document loading: 文档正在被加载');
//     break;
//   case 'interactive':
//     console.log('document interactive: 文档被全部读取');
//     break;
//   case 'complete':
//     console.log('document complete: 文档被全部读取，并且所有资源（例如图片等）都已加载完成');
//     break;
// }

// document.addEventListener('readystatechange', () => {
//   console.log(`document state: ${document.readyState}`);
// })
setTimeout(() => {
  console.log('hello');
}, 0)