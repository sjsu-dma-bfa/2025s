// used in artist page
// grab json data


var artist = "test";
var index = 0;

// Get a reference to the button
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

// Add an event handler for the click event
leftButton.addEventListener("click", function () {
    index -= 1;
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Adds smooth scrolling effect
    });
});
rightButton.addEventListener("click", function () {
    index += 1; 
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Adds smooth scrolling effect
    });
})

// ------------------------------
// Modal Stuff
// ------------------------------

const modal = document.getElementById("imageModal"); // the container
const modalImg = document.getElementById("modalImg"); // the display Image
const closeBtn = document.getElementById("closeModal"); // a button to close container
const thumbnails = document.querySelectorAll(".wide, .tall"); // all images allowed to be in modal

// Code for adding selected image to modal
thumbnails.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  // Hides modal window
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };


  // This hides the modal if you click outside of the image
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };




