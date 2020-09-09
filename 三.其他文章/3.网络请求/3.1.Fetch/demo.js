
async function getData() {
  const image = '../favicon.jpg';

  let imageRes = await fetch(image);
  let imageJson = await imageRes.blob();
  // console.log(imageJson);

  const img = document.createElement('img');
  document.body.appendChild(img);

  // img.src = URL.createObjectURL(imageJson);


  const text = '../fetch.json';
  let textRes = await fetch(text);
  let textJson = await textRes.json();
  // console.log(textJson);

  // console.log(textRes.headers.get('Content-Type'));

  

}


canvas.onmousemove = function(e) {
  let ctx = canvas.getContext('2d');

  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
}

async function submit() {
  let blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));

  console.log(blob);
  // const img = document.createElement('img');
  // document.body.appendChild(img);
  image.src = URL.createObjectURL(blob);
}