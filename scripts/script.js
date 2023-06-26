// JavaScript Document
console.log("Howdy!");

const balls = document.querySelectorAll("ol li div button");
const information = document.querySelectorAll("ol li section");

let outerCursor = document.querySelector(".outer-cursor");



balls.forEach((ball) => {
  ball.addEventListener("click", function (e) {
    ball.classList.toggle("balls-zoom-in");
    information.forEach((info) => {
      info.classList.toggle("information-visible");
    })
  });

  ball.addEventListener("mouseover", () => {
    document.getElementById("cursor").src = "images/cursor-pointer.png";
    })
  ball.addEventListener("mouseleave", () => {
    document.getElementById("cursor").src = "images/cursor-default.png";
  })
});



document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
  let x = e.clientX;
  let y = e.clientY;

  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}
// https://www.youtube.com/watch?v=Irwf2_1p7tQ


const cursor =  document.getElementById('cursor');

function opacity (){
  cursor.classList.remove('cursor');
}

document.addEventListener("mousemove", opacity);