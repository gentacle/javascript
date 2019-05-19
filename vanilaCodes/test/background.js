const body = document.querySelector("body");

const IMG_NUMBER = 3;


//image 형식 객체화 및 설정.
function paintImage(randomNumber){
  let image = new Image();
  image.src = `images/${randomNumber + 1}.jpg`;
  image.classList.add("bgImage");
  
  
  if(body.querySelector("img")){
    let bgImage = body.querySelector(".bgImage");
    console.log(bgImage);
    body.replaceChild(image,bgImage);
  }else{
    body.appendChild(image);
  }
}

function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber);
  setInterval(() => {
    let randomNumber = genRandom();
    paintImage(randomNumber);
  }, 10000);
}
init();