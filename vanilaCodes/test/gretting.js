const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");
const resetBtn = document.querySelector(".js-reset-btn");



const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function handleSubmit(e){
  e.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  localStorage.setItem(USER_LS,currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit",handleSubmit);
}


//인삿말 출력 + 입력란 숨김 + 초기화버튼 출력
function paintGreeting(text){
  greeting.innerText = `Hi! ${text}`;
  greeting.classList.add(SHOWING_CN);
  form.classList.remove(SHOWING_CN);
  resetBtn.classList.add(SHOWING_CN);
}  

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    //값이 없을때
    askForName();
    }else{
    //있을때
    paintGreeting(currentUser);
  }
}

function resetUser(){
  localStorage.removeItem(USER_LS);
  resetBtn.classList.remove(SHOWING_CN);
  loadName();
  greeting.classList.remove(SHOWING_CN);
  input.value = "";

}

function init(){
  loadName();
};
init();