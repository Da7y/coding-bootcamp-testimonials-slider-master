var slideIndex = 1;
showSlides(slideIndex);

document.querySelectorAll(".next")[0].addEventListener("click", function(){
  plusSlides(1)
});
document.querySelectorAll(".next")[1].addEventListener("click", function(){
  plusSlides(1)
});

document.querySelectorAll(".prev")[0].addEventListener("click", function(){
  plusSlides(-1)
});
document.querySelectorAll(".prev")[1].addEventListener("click", function(){
  plusSlides(-1)
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".mySlides");
  if (n > 2) {slideIndex = 1}
  if (n < 1) {slideIndex = 2}
  for (i = 0; i < 2; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex -1].style.display = "grid";
}


// document.querySelector(".next").onclick = plusSlides(0);
