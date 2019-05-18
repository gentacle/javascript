const title = document.querySelector("#title");

const BASE_COLOR = "rgb(23, 18, 83)";
const OTHER_COLOR = "#c25b3b";


function handleClick(){
  const currentColor = title.style.color;
  if(currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  }else{
    title.style.color = BASE_COLOR;
  }
}

function init(){
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter",handleClick);
}

init();

function handleOffline(){
  console.log("internet offline...")
}
function handleOnline(){
  console.log("internet online!!!")
}

window.addEventListener("offline",handleOffline);
window.addEventListener("online",handleOnline);