const mosquito = document.getElementById('mosquito');
const field = document.getElementById('field');
const finished = document.getElementById('finished');

let randomNumX = Math.floor(Math.random() * 50);
let randomNumY = Math.floor(Math.random() * 50);
let x = 0;
let dx = randomNumX;
let y = 0;
let dy = randomNumY;

let timeoutId;

// 0.1秒毎に、蚊を動かす
const countUp = ()=> {
  mosquito.style.left = x + 'px';
  mosquito.style.top = y + 'px';
  
  randomNumX = Math.floor(Math.random() * 50);
  randomNumY = Math.floor(Math.random() * 50);
  
  x += dx;
  y += dy;
  
  if(x + dx > 260 || x + dx < 0) {
    dx = -dx;
  }
  
  if(y + dy > 260 || y + dy < 0) {
    dy = -dy;
  }
  
  timeoutId = setTimeout(countUp, 100);
}

countUp();


field.addEventListener('click', (e)=> {

    // 蚊の座標を取得
    let mosquitoRect = mosquito.getBoundingClientRect() ;
    let mosquitoLeft = mosquitoRect.left;
    let mosquitoRight = mosquitoRect.right;
    let mosquitoTop = mosquitoRect.top;
    let mosquitoBottom = mosquitoRect.bottom;

    // 小数点以下を切り捨て
    mosquitoLeft = Math.floor(mosquitoLeft);
    mosquitoRight = Math.floor(mosquitoRight);
    mosquitoTop = Math.floor(mosquitoTop);
    mosquitoBottom = Math.floor(mosquitoBottom);
    
    // マウスの座標を取得
    let mouseLeft = e.pageX;
    let mouseTop = e.pageY;

    // クリックした時、マウス座標と蚊の座標が一致したらゲーム終了
    if(
      mosquitoLeft <= mouseLeft && mouseLeft <= mosquitoRight &&
      mosquitoTop <= mouseTop && mouseTop <= mosquitoBottom
      ){
      mosquito.style.transform = 'rotate(180deg)';
      mosquito.style.transition = '.5s';
      mosquito.style.top = 260 + 'px';
      finished.style.fontSize = 32 + 'px'
      clearTimeout(timeoutId);

    };

})

