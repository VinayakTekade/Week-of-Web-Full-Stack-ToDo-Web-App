let bgButton1 = document.querySelector("#bg1");
let bgButton2 = document.querySelector("#bg2");
let bgButton3 = document.querySelector("#bg3");
let bgButton4 = document.querySelector("#bg4");
let body = document.body;

const changeBg1 = () => {
  body.style.backgroundImage = `url("./img/background1.jpg")`;
};
const changeBg2 = () => {
  body.style.backgroundImage = `url("./img/background2.jpg")`;
};
const changeBg3 = () => {
  body.style.backgroundImage = `url("./img/background3.jpg")`;
};
const changeBg4 = () => {
  body.style.backgroundImage = `url("./img/background4.jpg")`;
};

bgButton1.addEventListener("click", changeBg1);
bgButton2.addEventListener("click", changeBg2);
bgButton3.addEventListener("click", changeBg3);
bgButton4.addEventListener("click", changeBg4);
