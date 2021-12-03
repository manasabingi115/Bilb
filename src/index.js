import "./styles.css";
var switchOn =
  "https://cdn1.iconfinder.com/data/icons/user-interface-11/100/11-1024.png";
var switchOff =
  "https://cdn1.iconfinder.com/data/icons/user-interface-11/100/10-1024.png";
var circle = document.getElementById("circle");
var onoff = document.getElementById("onoff");
var switchedOn = false;
onoff.addEventListener("click", () => {
  if (switchedOn) {
    onoff.src = switchOff;
    switchedOn = false;
  } else {
    onoff.src = switchOn;
    switchedOn = true;
  }
  circle.classList.toggle("my-class");
});
