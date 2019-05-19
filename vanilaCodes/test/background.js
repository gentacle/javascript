const body = document.querySelector("body");

const IMG_NUMBER = 3;



function handleImagLoad(){
  console.log("finished loading");
}

//image 형식 객체화 및 설정.
function paintImage(randomNumber){
  const image = new Image();
  image.src = `images/${randomNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
  // image.addEventListener("loadend",handleImagLoad)
}

function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();