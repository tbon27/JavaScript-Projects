// ===================
//  countdown example
// ===================

function countdown() {
  var seconds = document.getElementById("seconds").value; //assign user input value to var seconds

  function tick() {
    //if seconds value is equal to 1, run tick() function
    seconds = seconds - 1; //subtract 1 from second value
    timer.innerHTML = seconds; //display timer/seconds
    var time = setTimeout(tick, 1000); // program is pausing for 1,000 milliseconds
    if (seconds == 1) {
      alert("Time's up!");
      clearTimeout(time); //function to clear var time/setTimeout(tick, 1000) we set before
      timer.innerHTML = ""; //clear timer (after OK button pressed)
    }
  }
  tick(); //call function tick to take value from input seconds, display timer, and countdown until 1, and display alert
}

// ===================
//  slideshow demo
// ===================

var slideIndex = 0; //create a slide index starting at 0 - starting at 1 skips the first slide; we're hiding it
showSlides(slideIndex); //call showSlides with var slideIndex

//START SLIDESHOW
//this is to give a user some direction where to start slideshow with a click -- could just instruct to click arrows or dots
function startSlides(n) {
  //at slide n (whichever it may be)
  showSlides((slideIndex += n)); //call showSlides() and add one to slide index var
}
//Next/prev controls
function plusSlides(n) {
  showSlides((slideIndex += n)); //call showSlides() and add one to slide index var
}

//thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n)); //call showSlides() and with current slideIndex value
}

function showSlides(n) {
  var i; //create var i
  var slides = document.getElementsByClassName("mySlides"); //set var slides to html class mySlides
  var dots = document.getElementsByClassName("dot"); //set var dots to html clss dot
  if (n > slides.length) {
    //if n is greater than the length of slides array (3 slides)
    slideIndex = 1; //slideIndex is now equal to 1
  }
  if (n < 1) {
    //if n is less than 1
    slideIndex = slides.length; //slideIndex is now set to length
  }
  for (i = 0; i < slides.length; i++) {
    //starting at 0, and i is less than slides.length array, add 1
    slides[i].style.display = "none"; //set slide at i style display none
  }
  for (i = 0; i < dots.length; i++) {
    //starting at 0, and i is less than dots.length array, add 1
    dots[i].className = dots[i].className.replace(" active", ""); //replace class name " active" with ""
  }
  slides[slideIndex - 1].style.display = "block"; //slides at index slideIndex - 1, changes display to block
  dots[slideIndex - 1].className += " active"; //dots at index slideIndex - 1, add " active" to className
}
