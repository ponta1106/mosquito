const mosquito = document.getElementById('mosquito');
const field = document.getElementById('field');


field.addEventListener('click', (e)=> {

    var clientRect = mosquito.getBoundingClientRect() ;
    var clientX = clientRect.left ;
    var clientY = clientRect.top ;

    console.log(`蚊のx軸：${clientX}`);
    console.log(`蚊のy軸：${clientY}`);

    console.log(`マウスのx軸：${e.pageX}`);
    console.log(`マウスのy軸：${e.pageY}`);


})

let randomNumX = Math.floor(Math.random() * 50);
let randomNumY = Math.floor(Math.random() * 50);
let x = 0;
let dx = randomNumX;
let y = 0;
let dy = randomNumY;

const countUp = ()=> {
  mosquito.style.left = x + 'px';
  mosquito.style.top = y + 'px';

  randomNumX = Math.floor(Math.random() * 50);
  randomNumY = Math.floor(Math.random() * 50);

  x += dx;
  y += dy;

  if(x + dx > 450 || x + dx < 0) {
    dx = -dx;
  }

  if(y + dy > 450 || y + dy < 0) {
    dy = -dy;
  }
  
  setTimeout(countUp, 100);
}

countUp();


