// JavaScript Document
console.log("Howdy!");

const boxes = Array.from(document.getElementsByClassName("ball"));

let w = window.innerWidth;
let h = window.innerHeight;
console.log("Screen width: " + w);
console.log("Screen height: " + h);

let el = document.querySelector(".ball");
let elCoordinates = el.getBoundingClientRect();




boxes.forEach((box) => {
	console.log("x " + elCoordinates.x);
	console.log("y " + elCoordinates.y);


  box.addEventListener("click", function (e) {
    box.classList.toggle("balls-zoom-in");
  });
});





