// JavaScript Document
console.log("Howdy!");

const balls = document.querySelectorAll("ol li div button");
const information = document.querySelectorAll("ol li section");


balls.forEach((ball) => {
  ball.addEventListener("click", function (e) {
    ball.classList.toggle("balls-zoom-in");
    information.forEach((info) => {
      info.classList.toggle("information-visible");
    })
  });
});


// information.forEach((info) => {
//   balls.addEventListener("click", function (e) {
//     info.classList.toggle(".information-visible");
//   });
// });
