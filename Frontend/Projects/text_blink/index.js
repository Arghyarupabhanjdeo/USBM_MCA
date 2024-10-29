timer();
function timer() {
  let blink = document.getElementById("blink");
  //   blink.style.color = blink.style.color == "red" ? "blue" : "red";
  blink.style.opacity = blink.style.opacity == 1 ? 0.5 : 1;
  setTimeout(timer, 1000); //1000 millisecond = 1 second
}
