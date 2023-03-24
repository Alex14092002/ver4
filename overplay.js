// $(".overlay-black").click(function() {
//   $(".overlay").removeClass("overlay");
//   $(this).addClass("overlay");
// });

// $(".overlay").click(function() {
//   $(this).removeClass("overlay");
// });

function addOverlay() {
  var firstOverlay = document.querySelector('.overlay-black.overlay');
  firstOverlay.classList.add('overlay');
}

// function currentSlides(n) {
//   var currentOverlay = document.querySelector('.overlay-black.overlay');
//   if (currentOverlay) {
//     currentOverlay.classList.remove('overlay');
//   }
//   var newOverlay = document.querySelectorAll('.overlay-black')[n-1];
//   newOverlay.classList.add('overlay');
//   // rest of the code
// }