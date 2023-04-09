"use strict"

// Load the slides.json file and render the slides
function loadSlides() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const slides = JSON.parse(this.responseText).slides;
        renderSlides(slides);
      }
    };
    xhttp.open("GET", "slides.json", true);
    xhttp.send();
  }
  
  // Render the slides by creating iframes for each slide and appending them to the SLSH div
  function renderSlides(slides) {
    const slideContainer = document.getElementById("SLSH");
    slides.forEach((slide) => {
      const slideIframe = document.createElement("iframe");
      slideIframe.classList.add("slide");
      slideIframe.src = slide.url;
      slideIframe.style.display = "none";
      slideContainer.appendChild(slideIframe);
    });
  }
  
  // Play the slideshow by showing each slide at its specified time
  function playSlides() {
    const slides = document.getElementsByClassName("slide");
    let currentSlideIndex = 0;
  
    const playButton = document.getElementById("start");
    playButton.disabled = true;
  
    // Start playing the slides
    function play() {
      // Hide the previous slide
      if (currentSlideIndex > 0) {
        slides[currentSlideIndex - 1].style.display = "none";
      }
  
      // Show the current slide
      slides[currentSlideIndex].style.display = "block";
      slideContainer.scrollTop = 0;
  
      // Increment the current slide index
      currentSlideIndex++;
  
      // Stop if we've reached the end of the slides
      if (currentSlideIndex >= slides.length) {
        clearInterval(intervalId);
        playButton.disabled = false;
      }
    }
  
    // Start playing the slides at the specified times
    const intervalId = setInterval(() => {
      const currentSlide = slides[currentSlideIndex];
      const currentTime = currentSlideIndex < slides.length ? slides[currentSlideIndex].dataset.time : Infinity;
      const now = Date.now() / 1000;
  
      if (now >= currentTime) {
        play();
      }
    }, 500);
  }
  
  // Load the slides and start playing when the page has loaded
  window.onload = function() {
    loadSlides();
    const playButton = document.getElementById("start");
    playButton.onclick = playSlides;
  }
  