

// ------------------------------
// Modal Stuff
// ------------------------------

const modal = document.getElementById("imageModal"); // the container
const modalImg = document.getElementById("modalImg"); // the display Image
const closeBtn = document.getElementById("closeModal"); // a button to close container
const thumbnails = document.querySelectorAll(".modal-image"); // all images allowed to be in modal

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




