import "./styles.css";
var redBtn = document.querySelector("#red-btn");
var greenBtn = document.querySelector("#green-btn");
var blueBtn = document.querySelector("#blue-btn");
blueBtn.addEventListener("click", blueBtnclick);
redBtn.addEventListener("click", redBtnClick);
greenBtn.addEventListener("click", greenBtnClick);
function blueBtnclick() {
  document.getElementById("text-change").style.color = "blue";
}
function redBtnClick() {
  document.getElementById("text-change").style.color = "red";
}
function greenBtnClick() {
  document.getElementById("text-change").style.color = "green";
}
