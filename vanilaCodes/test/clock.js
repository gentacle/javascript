const clockTag = document.querySelector(".js-clock h1");

function getTime() {
  const setDate = new Date(),
    getHour = addPadLeft(setDate.getHours()),
    getMinute = addPadLeft(setDate.getMinutes()),
    getSecond = addPadLeft(setDate.getSeconds());
  clockTag.innerText = `${getHour}:${getMinute}:${getSecond}`;
}

function addPadLeft(value) {
  return value < 10 ? "0" + value : value;
}

function init() {
  getTime();
  const countTime = setInterval(getTime, 1000);
  setTimeout(() => clearInterval(countTime), 600000);
}
init();
