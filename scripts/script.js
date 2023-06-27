///////////////
// VARIABLES //
///////////////

const balls = document.querySelectorAll("button");
const information = document.querySelectorAll(".info");
const heading = document.querySelector("h2");
const paragraph = document.querySelector("p");
const cursor =  document.getElementById("cursor");
const brick = document.getElementById("brick")

let goalkeeperCursor = document.querySelector(".goalkeeper-cursor");


/////////////////////////////
// BALL'S ZOOM-IN FUNCTION //
/////////////////////////////

balls.forEach((ball) => {
  ball.addEventListener("click", function (e) {
    
    ball.classList.toggle("balls-zoom-in");

    if(ball.classList.contains('easter')){
      // alert("Yes! the button contains this 'buttonStyle' class");
      brick.classList.toggle("brick-visible");
    }

    information.forEach((info) => {
      info.classList.toggle("information-visible");
    });

    heading.textContent = e.target.dataset.heading;
    paragraph.textContent = e.target.dataset.paragraph;
    document.getElementById("background").style.backgroundImage = e.target.dataset.img;
  });

  ball.addEventListener("mouseover", () => {
    document.getElementById("cursor").src = "images/cursor-pointer.png";
    });
  ball.addEventListener("mouseleave", () => {
    document.getElementById("cursor").src = "images/cursor-default.png";
  });
});


///////////////////
// CUSTOM CURSOR //
///////////////////

function moveCursor(e){
  let x = e.clientX;
  let y = e.clientY;

  goalkeeperCursor.style.left = `${x}px`;
  goalkeeperCursor.style.top = `${y}px`;
}
document.addEventListener("mousemove", moveCursor);
// From: https://www.youtube.com/watch?v=Irwf2_1p7tQ


///////////////////////////////
// ONLOAD TRANSPARENT CURSOR //
///////////////////////////////

function opacity (){
  cursor.classList.remove('cursor');
}
document.addEventListener("mousemove", opacity);